import { useState } from "react";
import { AppLayout } from "@/components/AppLayout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { tasks, type Task } from "@/lib/dummy-data";
import { Search, Plus, MessageSquare, Calendar } from "lucide-react";

const statusConfig = {
  todo: { label: "To Do", color: "bg-muted text-muted-foreground" },
  in_progress: { label: "In Progress", color: "bg-info/10 text-info" },
  done: { label: "Done", color: "bg-success/10 text-success" },
};

const priorityConfig = {
  low: { label: "Low", color: "bg-muted text-muted-foreground" },
  medium: { label: "Medium", color: "bg-warning/10 text-warning" },
  high: { label: "High", color: "bg-destructive/10 text-destructive" },
};

function TaskColumn({ title, columnTasks, color }: { title: string; columnTasks: Task[]; color: string }) {
  return (
    <div className="space-y-3 min-w-[280px]">
      <div className="flex items-center gap-2 mb-1">
        <div className={`w-2 h-2 rounded-full ${color}`} />
        <h3 className="text-sm font-medium">{title}</h3>
        <span className="text-xs text-muted-foreground">{columnTasks.length}</span>
      </div>
      <div className="space-y-2.5">
        {columnTasks.map((task) => (
          <div key={task.id} className="p-3 rounded-lg border border-border/60 bg-card hover:shadow-sm transition-shadow space-y-2">
            <div className="flex items-center gap-2">
              <Badge variant="outline" className={`text-[10px] ${priorityConfig[task.priority].color}`}>
                {priorityConfig[task.priority].label}
              </Badge>
            </div>
            <p className="text-sm font-medium leading-snug">{task.title}</p>
            <p className="text-xs text-muted-foreground line-clamp-2">{task.description}</p>
            <div className="flex items-center justify-between text-[11px] text-muted-foreground pt-1">
              <span>{task.assignedTo}</span>
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1"><Calendar className="h-3 w-3" />{task.dueDate.slice(5)}</span>
                {task.comments > 0 && (
                  <span className="flex items-center gap-1"><MessageSquare className="h-3 w-3" />{task.comments}</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Tasks() {
  const [search, setSearch] = useState("");
  const filtered = tasks.filter(
    (t) => t.title.toLowerCase().includes(search.toLowerCase()) || t.assignedTo.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <AppLayout>
      <div className="space-y-6 max-w-[1400px]">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="page-header">Tasks</h1>
            <p className="page-subtitle">{tasks.length} total · {tasks.filter(t => t.status === "done").length} completed</p>
          </div>
          <Button size="sm"><Plus className="h-4 w-4 mr-1" />Add Task</Button>
        </div>

        <div className="relative max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search tasks..." value={search} onChange={(e) => setSearch(e.target.value)} className="pl-9" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <TaskColumn title="To Do" columnTasks={filtered.filter(t => t.status === "todo")} color="bg-muted-foreground" />
          <TaskColumn title="In Progress" columnTasks={filtered.filter(t => t.status === "in_progress")} color="bg-info" />
          <TaskColumn title="Done" columnTasks={filtered.filter(t => t.status === "done")} color="bg-success" />
        </div>
      </div>
    </AppLayout>
  );
}
