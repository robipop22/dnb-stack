
ARG NODE_VERSION=20

FROM node:${NODE_VERSION}-slim as build

WORKDIR /build

ARG BUN_VERSION=1.1.26

# Install Bun in the specified version
RUN apt update && apt install -y bash curl unzip && \
 curl https://bun.sh/install | bash -s -- bun-v${BUN_VERSION}

ENV PATH="${PATH}:/root/.bun/bin"

#
# Copy the lock file and app manifest, then install
# the dependencies, including the dev dependencies
#
COPY bun.lockb package.json ./

RUN bun install --frozen-lockfile

# Copy the application sources into the build stage
COPY . .

# Build your application
RUN bun run build

#
# Optional step: Here we will prune all unnecessary files from our
# node_modules directory, such as markdown and TypeScript source files,
# to further reduce the container image size.
#
RUN curl -sf https://gobinaries.com/tj/node-prune | sh && \
    node-prune

FROM node:${NODE_VERSION}-slim as distribution

ENV NODE_ENV="production"

WORKDIR /app

# Copy application build artifacts.
COPY --from=build --chown=node:node /build/node_modules ./node_modules
COPY --from=build --chown=node:node /build/build ./build
COPY --from=build --chown=node:node /build/public ./public
COPY --from=build --chown=node:node /build/package.json .

EXPOSE 3000

RUN chown -R node:node /app

USER node

CMD [ "npm", "run", "start" ]
