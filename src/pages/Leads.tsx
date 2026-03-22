import { useState } from "react";
import { AppLayout } from "@/components/AppLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { leads, type Lead, type LeadStage } from "@/lib/dummy-data";
import { Search, Plus, GripVertical, Phone, Mail, Building2 } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const stageConfig: Record<LeadStage, { label: string; color: string }> = {
  new: { label: "New", color: "bg-info/10 text-info border-info/20" },
  contacted: { label: "Contacted", color: "bg-primary/10 text-primary border-primary/20" },
  qualified: { label: "Qualified", color: "bg-warning/10 text-warning border-warning/20" },
  proposal: { label: "Proposal", color: "bg-accent text-accent-foreground border-border" },
  won: { label: "Won", color: "bg-success/10 text-success border-success/20" },
  lost: { label: "Lost", color: "bg-destructive/10 text-destructive border-destructive/20" },
};

const stages: LeadStage[] = ["new", "contacted", "qualified", "proposal", "won", "lost"];

function KanbanCard({ lead }: { lead: Lead }) {
  return (
    <div className="p-3 rounded-lg border border-border/60 bg-card hover:shadow-sm transition-shadow space-y-2.5 cursor-grab">
      <div className="flex items-start justify-between">
        <div className="min-w-0">
          <p className="text-sm font-medium truncate">{lead.name}</p>
          <div className="flex items-center gap-1 text-xs text-muted-foreground mt-0.5">
            <Building2 className="h-3 w-3" />
            <span className="truncate">{lead.company}</span>
          </div>
        </div>
        <GripVertical className="h-4 w-4 text-muted-foreground/40 shrink-0" />
      </div>
      <div className="flex items-center gap-3 text-[11px] text-muted-foreground">
        <span className="flex items-center gap-1"><Mail className="h-3 w-3" />{lead.email.split("@")[0]}</span>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold">${lead.value.toLocaleString()}</span>
        <Badge variant="outline" className="text-[10px]">{lead.source}</Badge>
      </div>
      <p className="text-[11px] text-muted-foreground">Assigned: {lead.assignedTo}</p>
    </div>
  );
}

function KanbanView({ filteredLeads }: { filteredLeads: Lead[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {stages.map((stage) => {
        const stageLeads = filteredLeads.filter((l) => l.stage === stage);
        const cfg = stageConfig[stage];
        return (
          <div key={stage} className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Badge variant="outline" className={`text-[10px] ${cfg.color}`}>{cfg.label}</Badge>
                <span className="text-xs text-muted-foreground">{stageLeads.length}</span>
              </div>
            </div>
            <div className="space-y-2.5 min-h-[100px]">
              {stageLeads.map((lead) => (
                <KanbanCard key={lead.id} lead={lead} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

function ListView({ filteredLeads }: { filteredLeads: Lead[] }) {
  return (
    <Card className="glass-card">
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left p-3 font-medium text-muted-foreground">Name</th>
                <th className="text-left p-3 font-medium text-muted-foreground">Company</th>
                <th className="text-left p-3 font-medium text-muted-foreground">Stage</th>
                <th className="text-left p-3 font-medium text-muted-foreground">Value</th>
                <th className="text-left p-3 font-medium text-muted-foreground">Source</th>
                <th className="text-left p-3 font-medium text-muted-foreground">Assigned</th>
              </tr>
            </thead>
            <tbody>
              {filteredLeads.map((lead) => (
                <tr key={lead.id} className="border-b border-border/50 hover:bg-muted/30">
                  <td className="p-3 font-medium">{lead.name}</td>
                  <td className="p-3 text-muted-foreground">{lead.company}</td>
                  <td className="p-3">
                    <Badge variant="outline" className={`text-[10px] ${stageConfig[lead.stage].color}`}>
                      {stageConfig[lead.stage].label}
                    </Badge>
                  </td>
                  <td className="p-3 font-medium">${lead.value.toLocaleString()}</td>
                  <td className="p-3 text-muted-foreground">{lead.source}</td>
                  <td className="p-3 text-muted-foreground">{lead.assignedTo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
}

export default function Leads() {
  const [search, setSearch] = useState("");
  const filteredLeads = leads.filter(
    (l) => l.name.toLowerCase().includes(search.toLowerCase()) || l.company.toLowerCase().includes(search.toLowerCase())
  );

  const totalValue = leads.reduce((sum, l) => sum + l.value, 0);
  const wonValue = leads.filter(l => l.stage === "won").reduce((sum, l) => sum + l.value, 0);

  return (
    <AppLayout>
      <div className="space-y-6 max-w-[1400px]">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="page-header">Leads</h1>
            <p className="page-subtitle">Manage your sales pipeline. {leads.length} total leads · ${totalValue.toLocaleString()} pipeline · ${wonValue.toLocaleString()} won</p>
          </div>
          <Button size="sm"><Plus className="h-4 w-4 mr-1" />Add Lead</Button>
        </div>

        <div className="flex items-center gap-3">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search leads..." value={search} onChange={(e) => setSearch(e.target.value)} className="pl-9" />
          </div>
        </div>

        <Tabs defaultValue="kanban">
          <TabsList>
            <TabsTrigger value="kanban">Kanban</TabsTrigger>
            <TabsTrigger value="list">List</TabsTrigger>
          </TabsList>
          <TabsContent value="kanban" className="mt-4">
            <KanbanView filteredLeads={filteredLeads} />
          </TabsContent>
          <TabsContent value="list" className="mt-4">
            <ListView filteredLeads={filteredLeads} />
          </TabsContent>
        </Tabs>
      </div>
    </AppLayout>
  );
}
