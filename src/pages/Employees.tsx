import { useState } from "react";
import { AppLayout } from "@/components/AppLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { employees } from "@/lib/dummy-data";
import { Search, Plus, Mail, Phone } from "lucide-react";

export default function Employees() {
  const [search, setSearch] = useState("");
  const filtered = employees.filter(
    (e) => e.name.toLowerCase().includes(search.toLowerCase()) || e.department.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <AppLayout>
      <div className="space-y-6 max-w-[1400px]">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="page-header">Employees</h1>
            <p className="page-subtitle">{employees.filter(e => e.status === "active").length} active · {employees.filter(e => e.status === "inactive").length} inactive</p>
          </div>
          <Button size="sm"><Plus className="h-4 w-4 mr-1" />Add Employee</Button>
        </div>

        <div className="relative max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search employees..." value={search} onChange={(e) => setSearch(e.target.value)} className="pl-9" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((emp) => (
            <Card key={emp.id} className="glass-card hover:shadow-md transition-shadow">
              <CardContent className="p-5">
                <div className="flex items-start gap-3">
                  <Avatar className="h-10 w-10">
                    <AvatarFallback className="bg-primary/10 text-primary text-sm">{emp.avatar}</AvatarFallback>
                  </Avatar>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="text-sm font-semibold truncate">{emp.name}</h3>
                      <Badge variant={emp.status === "active" ? "default" : "secondary"} className="text-[10px] capitalize shrink-0">
                        {emp.status}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">{emp.designation}</p>
                    <p className="text-xs text-muted-foreground">{emp.department}</p>
                  </div>
                </div>

                <div className="mt-4 space-y-1.5 text-xs text-muted-foreground">
                  <div className="flex items-center gap-2"><Mail className="h-3 w-3" />{emp.email}</div>
                  <div className="flex items-center gap-2"><Phone className="h-3 w-3" />{emp.phone}</div>
                </div>

                <div className="mt-4 grid grid-cols-3 gap-2 text-center">
                  <div className="p-2 rounded-md bg-muted/50">
                    <p className="text-sm font-semibold">{emp.tasksCompleted}</p>
                    <p className="text-[10px] text-muted-foreground">Tasks</p>
                  </div>
                  <div className="p-2 rounded-md bg-muted/50">
                    <p className="text-sm font-semibold">{emp.leadsConverted}</p>
                    <p className="text-[10px] text-muted-foreground">Leads</p>
                  </div>
                  <div className="p-2 rounded-md bg-muted/50">
                    <p className="text-sm font-semibold">{emp.attendanceRate}%</p>
                    <p className="text-[10px] text-muted-foreground">Attendance</p>
                  </div>
                </div>

                <div className="mt-3 flex items-center justify-between text-[11px] text-muted-foreground">
                  <span>Joined {emp.joinDate}</span>
                  <Badge variant="outline" className="text-[10px] capitalize">{emp.role.replace("_", " ")}</Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </AppLayout>
  );
}
