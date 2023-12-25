FROM public.ecr.aws/r2d2z1z9/sotanext/node:14

RUN mkdir -p /home/node/app
WORKDIR /home/node/app

COPY . .

RUN npm install -g typescript
RUN npm install

EXPOSE 4000

CMD ["npm", "start"]
