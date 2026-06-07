let notifications = [];

export async function GET() {
  return Response.json(notifications);
}

export async function POST(req) {
  const body = await req.json();

  const newNotification = {
    id: Date.now(),
    title: body.title,
    message: body.message,
  };

  notifications.push(newNotification);

  return Response.json(newNotification);
}