export async function GET(req: Request) {
  console.log(req.method, req.body);
  return Response.json({ statusCode: 200, message: 'API service' });
}

export async function POST(req: Request) {
  console.log(req.method, req.body);
  return Response.json({ statusCode: 200, message: 'API service' });
}
