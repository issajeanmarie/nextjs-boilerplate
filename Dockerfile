FROM node:20-slim as dependencies
WORKDIR /my-project
COPY package.json yarn.lock ./
RUN yarn

FROM node:20-slim as builder
WORKDIR /my-project
ARG NEXT_PUBLIC_API_HOST=
ARG NEXT_PUBLIC_AWS_BUCKET_ACCESS_ID=
ARG NEXT_PUBLIC_AWS_BUCKET_ACCESS_KEY=
ARG NEXT_PUBLIC_AWS_BUCKET_NAME=
ARG NEXT_PUBLIC_AWS_BUCKET_REGION=
ARG NEXT_PUBLIC_AWS_BUCKET_DIR_NAME=
RUN echo $NEXT_PUBLIC_API_HOST

COPY . .
COPY --from=dependencies /my-project/node_modules ./node_modules
RUN yarn build

FROM node:20-slim as runner
WORKDIR /my-project

COPY --from=builder /my-project/next.config.js ./
COPY --from=builder /my-project/public ./public
COPY --from=builder /my-project/.next ./.next
COPY --from=builder /my-project/node_modules ./node_modules
COPY --from=builder /my-project/package.json ./package.json

EXPOSE 3000
CMD ["yarn", "start"]