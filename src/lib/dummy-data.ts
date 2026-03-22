// ─── Departments ───
export const departments = [
  { id: "d1", name: "Engineering", head: "Sarah Chen", employeeCount: 12, status: "active" as const },
  { id: "d2", name: "Sales", head: "James Wilson", employeeCount: 8, status: "active" as const },
  { id: "d3", name: "Marketing", head: "Emily Rodriguez", employeeCount: 6, status: "active" as const },
  { id: "d4", name: "Human Resources", head: "Michael Brown", employeeCount: 4, status: "active" as const },
  { id: "d5", name: "Finance", head: "Lisa Park", employeeCount: 5, status: "active" as const },
  { id: "d6", name: "Support", head: "David Kim", employeeCount: 7, status: "active" as const },
];

// ─── Employees ───
export interface Employee {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: "super_admin" | "admin" | "manager" | "employee";
  department: string;
  designation: string;
  status: "active" | "inactive";
  joinDate: string;
  avatar: string;
  tasksCompleted: number;
  leadsConverted: number;
  attendanceRate: number;
}

export const employees: Employee[] = [
  { id: "e1", name: "Sarah Chen", email: "sarah@acme.io", phone: "+1 555-0101", role: "admin", department: "Engineering", designation: "VP Engineering", status: "active", joinDate: "2022-03-15", avatar: "SC", tasksCompleted: 145, leadsConverted: 0, attendanceRate: 98 },
  { id: "e2", name: "James Wilson", email: "james@acme.io", phone: "+1 555-0102", role: "manager", department: "Sales", designation: "Sales Director", status: "active", joinDate: "2021-08-01", avatar: "JW", tasksCompleted: 89, leadsConverted: 34, attendanceRate: 95 },
  { id: "e3", name: "Emily Rodriguez", email: "emily@acme.io", phone: "+1 555-0103", role: "manager", department: "Marketing", designation: "Marketing Lead", status: "active", joinDate: "2022-06-10", avatar: "ER", tasksCompleted: 112, leadsConverted: 12, attendanceRate: 97 },
  { id: "e4", name: "Michael Brown", email: "michael@acme.io", phone: "+1 555-0104", role: "admin", department: "Human Resources", designation: "HR Director", status: "active", joinDate: "2020-01-20", avatar: "MB", tasksCompleted: 78, leadsConverted: 0, attendanceRate: 99 },
  { id: "e5", name: "Lisa Park", email: "lisa@acme.io", phone: "+1 555-0105", role: "manager", department: "Finance", designation: "Finance Manager", status: "active", joinDate: "2021-11-05", avatar: "LP", tasksCompleted: 95, leadsConverted: 0, attendanceRate: 96 },
  { id: "e6", name: "David Kim", email: "david@acme.io", phone: "+1 555-0106", role: "manager", department: "Support", designation: "Support Lead", status: "active", joinDate: "2022-09-12", avatar: "DK", tasksCompleted: 132, leadsConverted: 5, attendanceRate: 94 },
  { id: "e7", name: "Alex Turner", email: "alex@acme.io", phone: "+1 555-0107", role: "employee", department: "Engineering", designation: "Senior Developer", status: "active", joinDate: "2023-01-08", avatar: "AT", tasksCompleted: 167, leadsConverted: 0, attendanceRate: 92 },
  { id: "e8", name: "Priya Sharma", email: "priya@acme.io", phone: "+1 555-0108", role: "employee", department: "Sales", designation: "Account Executive", status: "active", joinDate: "2023-04-18", avatar: "PS", tasksCompleted: 74, leadsConverted: 28, attendanceRate: 97 },
  { id: "e9", name: "Tom Harris", email: "tom@acme.io", phone: "+1 555-0109", role: "employee", department: "Engineering", designation: "Full Stack Developer", status: "active", joinDate: "2023-07-22", avatar: "TH", tasksCompleted: 98, leadsConverted: 0, attendanceRate: 90 },
  { id: "e10", name: "Nina Patel", email: "nina@acme.io", phone: "+1 555-0110", role: "employee", department: "Marketing", designation: "Content Strategist", status: "inactive", joinDate: "2022-02-14", avatar: "NP", tasksCompleted: 56, leadsConverted: 8, attendanceRate: 88 },
];

// ─── Leads ───
export type LeadStage = "new" | "contacted" | "qualified" | "proposal" | "won" | "lost";

export interface Lead {
  id: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  source: string;
  stage: LeadStage;
  value: number;
  assignedTo: string;
  createdAt: string;
  lastContact: string;
  notes: string;
}

export const leads: Lead[] = [
  { id: "l1", name: "Robert Martinez", company: "TechFlow Inc", email: "robert@techflow.com", phone: "+1 555-1001", source: "Website", stage: "new", value: 15000, assignedTo: "James Wilson", createdAt: "2026-03-18", lastContact: "2026-03-18", notes: "Interested in enterprise plan" },
  { id: "l2", name: "Amanda Foster", company: "GreenLeaf Co", email: "amanda@greenleaf.co", phone: "+1 555-1002", source: "Referral", stage: "contacted", value: 32000, assignedTo: "Priya Sharma", createdAt: "2026-03-10", lastContact: "2026-03-20", notes: "Demo scheduled for next week" },
  { id: "l3", name: "Chen Wei", company: "DataPulse", email: "chen@datapulse.io", phone: "+1 555-1003", source: "LinkedIn", stage: "qualified", value: 48000, assignedTo: "James Wilson", createdAt: "2026-02-28", lastContact: "2026-03-19", notes: "Budget approved, needs technical review" },
  { id: "l4", name: "Sophie Laurent", company: "CreativeHub", email: "sophie@creativehub.fr", phone: "+1 555-1004", source: "Conference", stage: "proposal", value: 25000, assignedTo: "Priya Sharma", createdAt: "2026-02-15", lastContact: "2026-03-21", notes: "Proposal sent, awaiting feedback" },
  { id: "l5", name: "Mark Thompson", company: "BuildRight LLC", email: "mark@buildright.com", phone: "+1 555-1005", source: "Cold Call", stage: "won", value: 67000, assignedTo: "James Wilson", createdAt: "2026-01-20", lastContact: "2026-03-15", notes: "Contract signed! 12-month deal" },
  { id: "l6", name: "Yuki Tanaka", company: "NexGen AI", email: "yuki@nexgen.ai", phone: "+1 555-1006", source: "Website", stage: "new", value: 22000, assignedTo: "Priya Sharma", createdAt: "2026-03-20", lastContact: "2026-03-20", notes: "Downloaded whitepaper" },
  { id: "l7", name: "Carlos Rivera", company: "Solaris Energy", email: "carlos@solaris.com", phone: "+1 555-1007", source: "Referral", stage: "contacted", value: 41000, assignedTo: "James Wilson", createdAt: "2026-03-05", lastContact: "2026-03-18", notes: "Follow-up call completed" },
  { id: "l8", name: "Olivia Bennett", company: "CloudNine", email: "olivia@cloudnine.io", phone: "+1 555-1008", source: "LinkedIn", stage: "lost", value: 18000, assignedTo: "Priya Sharma", createdAt: "2026-01-10", lastContact: "2026-02-28", notes: "Went with competitor" },
  { id: "l9", name: "Raj Gupta", company: "FinEdge", email: "raj@finedge.in", phone: "+1 555-1009", source: "Website", stage: "qualified", value: 55000, assignedTo: "James Wilson", createdAt: "2026-03-01", lastContact: "2026-03-22", notes: "Technical evaluation ongoing" },
  { id: "l10", name: "Diana Moore", company: "HealthFirst", email: "diana@healthfirst.com", phone: "+1 555-1010", source: "Conference", stage: "proposal", value: 38000, assignedTo: "Priya Sharma", createdAt: "2026-02-20", lastContact: "2026-03-20", notes: "Negotiating terms" },
];

// ─── Tasks ───
export interface Task {
  id: string;
  title: string;
  description: string;
  assignedTo: string;
  priority: "low" | "medium" | "high";
  status: "todo" | "in_progress" | "done";
  dueDate: string;
  createdAt: string;
  comments: number;
}

export const tasks: Task[] = [
  { id: "t1", title: "Prepare Q1 sales report", description: "Compile quarterly sales data and create presentation", assignedTo: "James Wilson", priority: "high", status: "in_progress", dueDate: "2026-03-25", createdAt: "2026-03-15", comments: 3 },
  { id: "t2", title: "Update CRM integration docs", description: "Document the new API endpoints", assignedTo: "Alex Turner", priority: "medium", status: "todo", dueDate: "2026-03-28", createdAt: "2026-03-18", comments: 1 },
  { id: "t3", title: "Follow up with TechFlow", description: "Schedule demo and send pricing", assignedTo: "Priya Sharma", priority: "high", status: "todo", dueDate: "2026-03-23", createdAt: "2026-03-20", comments: 0 },
  { id: "t4", title: "Design new landing page", description: "Create mockups for the product launch page", assignedTo: "Emily Rodriguez", priority: "medium", status: "done", dueDate: "2026-03-20", createdAt: "2026-03-10", comments: 5 },
  { id: "t5", title: "Review hiring pipeline", description: "Screen candidates for developer role", assignedTo: "Michael Brown", priority: "high", status: "in_progress", dueDate: "2026-03-24", createdAt: "2026-03-12", comments: 2 },
  { id: "t6", title: "Deploy v2.3 hotfix", description: "Fix payment gateway timeout issue", assignedTo: "Tom Harris", priority: "high", status: "done", dueDate: "2026-03-19", createdAt: "2026-03-18", comments: 4 },
  { id: "t7", title: "Create onboarding guide", description: "Write step-by-step guide for new employees", assignedTo: "Michael Brown", priority: "low", status: "todo", dueDate: "2026-03-30", createdAt: "2026-03-20", comments: 0 },
  { id: "t8", title: "Optimize database queries", description: "Improve slow queries on reports page", assignedTo: "Sarah Chen", priority: "medium", status: "in_progress", dueDate: "2026-03-26", createdAt: "2026-03-14", comments: 2 },
];

// ─── Attendance ───
export interface AttendanceRecord {
  id: string;
  employeeId: string;
  employeeName: string;
  date: string;
  loginTime: string;
  logoutTime: string;
  status: "present" | "absent" | "late" | "half_day";
  hoursWorked: number;
}

export const attendanceRecords: AttendanceRecord[] = [
  { id: "a1", employeeId: "e1", employeeName: "Sarah Chen", date: "2026-03-22", loginTime: "08:55", logoutTime: "17:30", status: "present", hoursWorked: 8.5 },
  { id: "a2", employeeId: "e2", employeeName: "James Wilson", date: "2026-03-22", loginTime: "09:15", logoutTime: "18:00", status: "late", hoursWorked: 8.75 },
  { id: "a3", employeeId: "e3", employeeName: "Emily Rodriguez", date: "2026-03-22", loginTime: "08:45", logoutTime: "17:15", status: "present", hoursWorked: 8.5 },
  { id: "a4", employeeId: "e7", employeeName: "Alex Turner", date: "2026-03-22", loginTime: "09:00", logoutTime: "17:45", status: "present", hoursWorked: 8.75 },
  { id: "a5", employeeId: "e8", employeeName: "Priya Sharma", date: "2026-03-22", loginTime: "08:50", logoutTime: "17:30", status: "present", hoursWorked: 8.67 },
  { id: "a6", employeeId: "e9", employeeName: "Tom Harris", date: "2026-03-22", loginTime: "", logoutTime: "", status: "absent", hoursWorked: 0 },
  { id: "a7", employeeId: "e4", employeeName: "Michael Brown", date: "2026-03-22", loginTime: "08:30", logoutTime: "17:00", status: "present", hoursWorked: 8.5 },
  { id: "a8", employeeId: "e5", employeeName: "Lisa Park", date: "2026-03-22", loginTime: "09:00", logoutTime: "13:00", status: "half_day", hoursWorked: 4 },
  { id: "a9", employeeId: "e6", employeeName: "David Kim", date: "2026-03-22", loginTime: "08:40", logoutTime: "17:20", status: "present", hoursWorked: 8.67 },
];

// ─── Leave Requests ───
export interface LeaveRequest {
  id: string;
  employeeName: string;
  type: "sick" | "vacation" | "personal" | "maternity";
  startDate: string;
  endDate: string;
  status: "pending" | "approved" | "rejected";
  reason: string;
}

export const leaveRequests: LeaveRequest[] = [
  { id: "lr1", employeeName: "Tom Harris", type: "sick", startDate: "2026-03-22", endDate: "2026-03-23", status: "approved", reason: "Feeling unwell" },
  { id: "lr2", employeeName: "Nina Patel", type: "vacation", startDate: "2026-03-25", endDate: "2026-03-30", status: "pending", reason: "Family vacation" },
  { id: "lr3", employeeName: "Alex Turner", type: "personal", startDate: "2026-04-01", endDate: "2026-04-01", status: "pending", reason: "Personal appointment" },
  { id: "lr4", employeeName: "Lisa Park", type: "sick", startDate: "2026-03-22", endDate: "2026-03-22", status: "approved", reason: "Doctor appointment (half day)" },
];

// ─── Notifications ───
export interface Notification {
  id: string;
  type: "task" | "lead" | "leave" | "system";
  title: string;
  message: string;
  time: string;
  read: boolean;
}

export const notifications: Notification[] = [
  { id: "n1", type: "task", title: "Task assigned", message: "You've been assigned 'Prepare Q1 sales report'", time: "5 min ago", read: false },
  { id: "n2", type: "lead", title: "Lead updated", message: "Chen Wei moved to Qualified stage", time: "15 min ago", read: false },
  { id: "n3", type: "leave", title: "Leave approved", message: "Tom Harris's sick leave has been approved", time: "1 hour ago", read: true },
  { id: "n4", type: "lead", title: "New lead", message: "Yuki Tanaka from NexGen AI added as new lead", time: "2 hours ago", read: true },
  { id: "n5", type: "system", title: "System update", message: "Platform maintenance scheduled for Sunday 2 AM", time: "3 hours ago", read: true },
  { id: "n6", type: "task", title: "Task completed", message: "Emily Rodriguez completed 'Design new landing page'", time: "5 hours ago", read: true },
];

// ─── Chart Data ───
export const monthlyRevenue = [
  { month: "Oct", revenue: 42000 },
  { month: "Nov", revenue: 48000 },
  { month: "Dec", revenue: 55000 },
  { month: "Jan", revenue: 51000 },
  { month: "Feb", revenue: 62000 },
  { month: "Mar", revenue: 67000 },
];

export const leadsBySource = [
  { source: "Website", count: 35, fill: "hsl(var(--chart-1))" },
  { source: "Referral", count: 25, fill: "hsl(var(--chart-2))" },
  { source: "LinkedIn", count: 20, fill: "hsl(var(--chart-3))" },
  { source: "Conference", count: 12, fill: "hsl(var(--chart-4))" },
  { source: "Cold Call", count: 8, fill: "hsl(var(--chart-5))" },
];

export const taskCompletionTrend = [
  { week: "W1", completed: 12, created: 15 },
  { week: "W2", completed: 18, created: 14 },
  { week: "W3", completed: 15, created: 20 },
  { week: "W4", completed: 22, created: 17 },
];
