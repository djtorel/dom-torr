import React from "react";
import { withSSR } from "koa-nextjs/react";

const Index = () => (
  <div>
    <h1>Hello World</h1>
    <p>Using Koa-Nextjs to make SSR React page with Koa backend</p>
  </div>
);

export default withSSR()(Index);
