import * as build from '@remix-run/dev/server-build';
import { createRequestHandler } from '@remix-run/node';

export default createRequestHandler({ build, mode: process.env.NODE_ENV });
