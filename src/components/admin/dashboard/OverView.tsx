import { DashboardData } from "@/helpers/dashboard_data";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

export default function OverView(){
    return(
        <ResponsiveContainer width="100%" height={350}>
      <BarChart data={DashboardData}>
        <XAxis
          dataKey="name"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `$${value}`}
        />
        <Bar dataKey="total" fill="#2563eb" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
    )
}