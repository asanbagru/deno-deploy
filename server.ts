import { serve } from "https://deno.land/std@0.160.0/http/server.ts";
import { join } from "https://deno.land/std@0.160.0/path/mod.ts";

// Serve the HTML file
const htmlFilePath = join(Deno.cwd(), "index.html");

async function handler(req: Request): Promise<Response> {
  const html = await Deno.readTextFile(htmlFilePath);
  return new Response(html, {
    status: 200,
    headers: {
      "Content-Type": "text/html; charset=utf-8",
    },
  });
}

console.log("Server running on http://localhost:8000");
await serve(handler, { port: 8000 });
