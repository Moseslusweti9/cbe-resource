export async function GET() {
  return Response.json({
    status: 'ok',
    app: 'CBE RESOURCE',
    phase: '1',
    message: 'Demo health check. Server-side secrets remain in environment variables only.'
  });
}
