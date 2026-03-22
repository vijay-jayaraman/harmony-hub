import { useState } from "react";
import { AppLayout } from "@/components/AppLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { attendanceRecords, leaveRequests } from "@/lib/dummy-data";
import { Clock, CheckCircle2, XCircle, AlertTriangle } from "lucide-react";

const statusIcon = {
  present: <CheckCircle2 className="h-4 w-4 text-success" />,
  absent: <XCircle className="h-4 w-4 text-destructive" />,
  late: <AlertTriangle className="h-4 w-4 text-warning" />,
  half_day: <Clock className="h-4 w-4 text-info" />,
};

export default function Attendance() {
  const present = attendanceRecords.filter(r => r.status === "present").length;
  const absent = attendanceRecords.filter(r => r.status === "absent").length;
  const late = attendanceRecords.filter(r => r.status === "late").length;
  const halfDay = attendanceRecords.filter(r => r.status === "half_day").length;

  return (
    <AppLayout>
      <div className="space-y-6 max-w-[1400px]">
        <div>
          <h1 className="page-header">Attendance</h1>
          <p className="page-subtitle">Today's attendance overview — March 22, 2026</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Present", value: present, color: "text-success", icon: CheckCircle2 },
            { label: "Absent", value: absent, color: "text-destructive", icon: XCircle },
            { label: "Late", value: late, color: "text-warning", icon: AlertTriangle },
            { label: "Half Day", value: halfDay, color: "text-info", icon: Clock },
          ].map((s) => (
            <div key={s.label} className="stat-card">
              <s.icon className={`h-4 w-4 ${s.color} mb-2`} />
              <p className="text-2xl font-bold">{s.value}</p>
              <p className="text-xs text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>

        <Tabs defaultValue="daily">
          <TabsList>
            <TabsTrigger value="daily">Daily Log</TabsTrigger>
            <TabsTrigger value="leaves">Leave Requests</TabsTrigger>
          </TabsList>

          <TabsContent value="daily" className="mt-4">
            <Card className="glass-card">
              <CardContent className="p-0">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left p-3 font-medium text-muted-foreground">Employee</th>
                      <th className="text-left p-3 font-medium text-muted-foreground">Status</th>
                      <th className="text-left p-3 font-medium text-muted-foreground">Login</th>
                      <th className="text-left p-3 font-medium text-muted-foreground">Logout</th>
                      <th className="text-left p-3 font-medium text-muted-foreground">Hours</th>
                    </tr>
                  </thead>
                  <tbody>
                    {attendanceRecords.map((record) => (
                      <tr key={record.id} className="border-b border-border/50 hover:bg-muted/30">
                        <td className="p-3 font-medium">{record.employeeName}</td>
                        <td className="p-3">
                          <div className="flex items-center gap-1.5">
                            {statusIcon[record.status]}
                            <span className="capitalize text-xs">{record.status.replace("_", " ")}</span>
                          </div>
                        </td>
                        <td className="p-3 text-muted-foreground">{record.loginTime || "—"}</td>
                        <td className="p-3 text-muted-foreground">{record.logoutTime || "—"}</td>
                        <td className="p-3 text-muted-foreground">{record.hoursWorked > 0 ? `${record.hoursWorked}h` : "—"}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="leaves" className="mt-4">
            <Card className="glass-card">
              <CardContent className="p-0">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left p-3 font-medium text-muted-foreground">Employee</th>
                      <th className="text-left p-3 font-medium text-muted-foreground">Type</th>
                      <th className="text-left p-3 font-medium text-muted-foreground">Duration</th>
                      <th className="text-left p-3 font-medium text-muted-foreground">Status</th>
                      <th className="text-left p-3 font-medium text-muted-foreground">Reason</th>
                      <th className="text-left p-3 font-medium text-muted-foreground">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {leaveRequests.map((req) => (
                      <tr key={req.id} className="border-b border-border/50 hover:bg-muted/30">
                        <td className="p-3 font-medium">{req.employeeName}</td>
                        <td className="p-3"><Badge variant="outline" className="text-[10px] capitalize">{req.type}</Badge></td>
                        <td className="p-3 text-muted-foreground text-xs">{req.startDate} → {req.endDate}</td>
                        <td className="p-3">
                          <Badge variant={req.status === "approved" ? "default" : req.status === "rejected" ? "destructive" : "secondary"} className="text-[10px] capitalize">
                            {req.status}
                          </Badge>
                        </td>
                        <td className="p-3 text-muted-foreground text-xs">{req.reason}</td>
                        <td className="p-3">
                          {req.status === "pending" && (
                            <div className="flex gap-1">
                              <Button size="sm" variant="ghost" className="h-7 text-xs text-success">Approve</Button>
                              <Button size="sm" variant="ghost" className="h-7 text-xs text-destructive">Reject</Button>
                            </div>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </AppLayout>
  );
}
