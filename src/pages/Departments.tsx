import { AppLayout } from "@/components/AppLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { departments } from "@/lib/dummy-data";
import { Plus, Users, User } from "lucide-react";

export default function Departments() {
  return (
    <AppLayout>
      <div className="space-y-6 max-w-[1400px]">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="page-header">Departments</h1>
            <p className="page-subtitle">{departments.length} departments · {departments.reduce((s, d) => s + d.employeeCount, 0)} total employees</p>
          </div>
          <Button size="sm"><Plus className="h-4 w-4 mr-1" />Add Department</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {departments.map((dept) => (
            <Card key={dept.id} className="glass-card hover:shadow-md transition-shadow">
              <CardContent className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-base font-semibold">{dept.name}</h3>
                  <Badge variant="default" className="text-[10px] capitalize">{dept.status}</Badge>
                </div>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2"><User className="h-3.5 w-3.5" />Head: {dept.head}</div>
                  <div className="flex items-center gap-2"><Users className="h-3.5 w-3.5" />{dept.employeeCount} employees</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </AppLayout>
  );
}
