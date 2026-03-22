import { AppLayout } from "@/components/AppLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { employees } from "@/lib/dummy-data";
import { Trophy, Medal, Award, Flame } from "lucide-react";

const badges = [
  { name: "Top Closer", icon: Trophy, threshold: 30 },
  { name: "Task Master", icon: Flame, threshold: 130 },
  { name: "Perfect Attendance", icon: Medal, threshold: 97 },
];

function getScore(e: typeof employees[0]) {
  return Math.round(e.tasksCompleted * 0.4 + e.leadsConverted * 3 + e.attendanceRate * 0.5);
}

export default function Leaderboard() {
  const ranked = [...employees]
    .filter(e => e.status === "active")
    .map(e => ({ ...e, score: getScore(e) }))
    .sort((a, b) => b.score - a.score);

  const medalColors = ["text-warning", "text-muted-foreground", "text-warning"];

  return (
    <AppLayout>
      <div className="space-y-6 max-w-[1000px]">
        <div>
          <h1 className="page-header">Leaderboard</h1>
          <p className="page-subtitle">Employee performance rankings based on tasks, leads, and attendance.</p>
        </div>

        {/* Top 3 podium */}
        <div className="grid grid-cols-3 gap-4">
          {ranked.slice(0, 3).map((emp, i) => (
            <Card key={emp.id} className={`glass-card text-center ${i === 0 ? "border-warning/30 shadow-sm" : ""}`}>
              <CardContent className="pt-6 pb-5">
                <div className="flex justify-center mb-2">
                  {i === 0 ? <Trophy className="h-6 w-6 text-warning" /> : i === 1 ? <Medal className="h-6 w-6 text-muted-foreground" /> : <Award className="h-6 w-6 text-orange-600" />}
                </div>
                <Avatar className="h-12 w-12 mx-auto mb-2">
                  <AvatarFallback className="bg-primary/10 text-primary">{emp.avatar}</AvatarFallback>
                </Avatar>
                <p className="font-semibold text-sm">{emp.name}</p>
                <p className="text-xs text-muted-foreground">{emp.designation}</p>
                <p className="text-2xl font-bold mt-2">{emp.score}</p>
                <p className="text-[10px] text-muted-foreground">points</p>
                <div className="flex flex-wrap gap-1 justify-center mt-3">
                  {badges.filter(b =>
                    (b.name === "Top Closer" && emp.leadsConverted >= b.threshold) ||
                    (b.name === "Task Master" && emp.tasksCompleted >= b.threshold) ||
                    (b.name === "Perfect Attendance" && emp.attendanceRate >= b.threshold)
                  ).map(b => (
                    <Badge key={b.name} variant="outline" className="text-[9px]">{b.name}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Full ranking */}
        <Card className="glass-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Full Rankings</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-3 font-medium text-muted-foreground w-12">#</th>
                  <th className="text-left p-3 font-medium text-muted-foreground">Employee</th>
                  <th className="text-center p-3 font-medium text-muted-foreground">Tasks</th>
                  <th className="text-center p-3 font-medium text-muted-foreground">Leads</th>
                  <th className="text-center p-3 font-medium text-muted-foreground">Attendance</th>
                  <th className="text-center p-3 font-medium text-muted-foreground">Score</th>
                </tr>
              </thead>
              <tbody>
                {ranked.map((emp, i) => (
                  <tr key={emp.id} className="border-b border-border/50 hover:bg-muted/30">
                    <td className={`p-3 font-bold ${i < 3 ? medalColors[i] : "text-muted-foreground"}`}>{i + 1}</td>
                    <td className="p-3">
                      <div className="flex items-center gap-2">
                        <Avatar className="h-7 w-7">
                          <AvatarFallback className="bg-primary/10 text-primary text-[10px]">{emp.avatar}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium text-sm">{emp.name}</p>
                          <p className="text-[11px] text-muted-foreground">{emp.department}</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-3 text-center">{emp.tasksCompleted}</td>
                    <td className="p-3 text-center">{emp.leadsConverted}</td>
                    <td className="p-3 text-center">{emp.attendanceRate}%</td>
                    <td className="p-3 text-center font-bold">{emp.score}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
}
