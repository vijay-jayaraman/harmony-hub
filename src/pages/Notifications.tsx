import { useState } from "react";
import { AppLayout } from "@/components/AppLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { notifications, type Notification } from "@/lib/dummy-data";
import { Bell, CheckSquare, Target, Calendar, Info, CheckCheck } from "lucide-react";

const typeIcon = {
  task: <CheckSquare className="h-4 w-4 text-primary" />,
  lead: <Target className="h-4 w-4 text-success" />,
  leave: <Calendar className="h-4 w-4 text-warning" />,
  system: <Info className="h-4 w-4 text-info" />,
};

export default function Notifications() {
  const [items, setItems] = useState(notifications);
  const unread = items.filter(n => !n.read).length;

  const markAllRead = () => setItems(items.map(n => ({ ...n, read: true })));
  const markRead = (id: string) => setItems(items.map(n => n.id === id ? { ...n, read: true } : n));

  return (
    <AppLayout>
      <div className="space-y-6 max-w-[800px]">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="page-header">Notifications</h1>
            <p className="page-subtitle">{unread} unread notifications</p>
          </div>
          {unread > 0 && (
            <Button size="sm" variant="outline" onClick={markAllRead}>
              <CheckCheck className="h-4 w-4 mr-1" />Mark all read
            </Button>
          )}
        </div>

        <div className="space-y-2">
          {items.map((notif) => (
            <Card
              key={notif.id}
              className={`glass-card cursor-pointer transition-colors ${!notif.read ? "bg-primary/[0.02] border-primary/10" : ""}`}
              onClick={() => markRead(notif.id)}
            >
              <CardContent className="p-4 flex items-start gap-3">
                <div className="mt-0.5">{typeIcon[notif.type]}</div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <p className={`text-sm ${!notif.read ? "font-semibold" : "font-medium"}`}>{notif.title}</p>
                    {!notif.read && <div className="w-2 h-2 rounded-full bg-primary shrink-0" />}
                  </div>
                  <p className="text-xs text-muted-foreground mt-0.5">{notif.message}</p>
                  <p className="text-[11px] text-muted-foreground mt-1">{notif.time}</p>
                </div>
                <Badge variant="outline" className="text-[9px] capitalize shrink-0">{notif.type}</Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </AppLayout>
  );
}
