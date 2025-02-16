import * as build from '@react-router/dev/server-build';
import { createRequestHandler } from '@vercel/remix';

export default createRequestHandler({ build, mode: process.env.NODE_ENV });
