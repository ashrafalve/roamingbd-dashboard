const theme = {
  text: "#3B2963",
  primary: "#0E0B64",
  primaryMid: "#3B2963",
  accent: "#6713e6",
  pageBackground: "#F0F2F8",
};

const sidebar = {
  items: [
    { name: "Dashboard", icon: "/icons/dashboard.png" },
    { name: "Flight Booking", icon: "/icons/flightbooking.png" },
    { name: "Hotel Booking", icon: "/icons/hotelbooking.png" },
    { name: "Visa Services", icon: "/icons/visaservice.png" },
    { name: "Tours & Activities", icon: "/icons/tourandactivities.png" },
    { name: "Umrah Packages", icon: "/icons/umrahpackage.png" },
    { name: "My Bookings", icon: "/icons/bookicon.png" },
    { name: "Wallet & Finance", icon: "/icons/walletwhite.png" },
    { name: "Markup & Settings", icon: "/icons/markup.png" },
    { name: "Reports", icon: "/icons/reports.png" },
    { name: "PNR Tools", icon: "/icons/pnrtools.png" },
    { name: "CRM", icon: "/icons/dashboard.png" },
    { name: "Support Center", icon: "/icons/supportcentre.png" },
    { name: "Settings", icon: "/icons/settings.png" },
  ],
};

const dashboardMetrics = {
  stats: [
    {
      title: "Total Bookings",
      value: "256",
      change: "18.5%",
      subtext: "vs last 30 days",
      icon: "/icons/totalbooking.png",
      iconBg: "bg-[#3B2963]",
      lightBg: "bg-[#3B2963]/10",
    },
    {
      title: "Total Sales",
      value: "BDT 1,875,450",
      change: "22.3%",
      subtext: "vs last 30 days",
      icon: "/icons/totalsale.png",
      iconBg: "bg-[#00D420]",
      lightBg: "bg-[#00D420]/10",
    },
    {
      title: "Total Profit",
      value: "BDT 248,750",
      change: "20.1%",
      subtext: "vs last 30 days",
      icon: "/icons/totalprofit.png",
      iconBg: "bg-[#F97E20]",
      lightBg: "bg-[#F97E20]/10",
    },
    {
      title: "Wallet Balance",
      value: "BDT 125,750.00",
      subtext: "Available Balance",
      icon: "/icons/walletwhite.png",
      iconBg: "bg-[#2E6CFD]",
      lightBg: "bg-[#2E6CFD]/10",
    },
  ],
  quickActions: [
    { name: "Book Flight", icon: "/icons/flightbooking.png", color: "#6720EA" },
    { name: "Book Hotel", icon: "/icons/hotelbooking.png", color: "#2E6CFD" },
    { name: "Visa Application", icon: "/icons/visaservice.png", color: "#00D420" },
    { name: "Umrah Package", icon: "/icons/umrahpackage.png", color: "#000000" },
    { name: "Add Money", icon: "/icons/walletwhite.png", color: "#08A89C" },
    { name: "My Bookings", icon: "/icons/bookicon.png", color: "#A00FD6" },
    { name: "PNR Retrieve", icon: "/icons/pnrtools.png", color: "#03068B" },
    { name: "Support Ticket", icon: "/icons/supportcentre.png", color: "#F60C10" },
  ],
  topAirlines: [
    { name: "Biman Bangladesh", bookings: 56, logo: "/icons/bimanbangladesh.png" },
    { name: "Emirates", bookings: 42, logo: "/icons/emirates.png" },
    { name: "Qatar Airways", bookings: 38, logo: "/icons/qatarairways.png" },
    { name: "Turkish Airlines", bookings: 31, logo: "/icons/turkishairlines.png" },
    { name: "Air Arabia", bookings: 26, logo: "/icons/668e9c2de53bd3953c0fabc5.png" },
  ],
  notifications: [
    {
      title: "Flight Booking Confirmed",
      desc: "DAC → DXB | EK 584",
      time: "Just now",
      icon: "/icons/flightbooking.png",
      color: "#4F46E5",
    },
    {
      title: "Money Added",
      desc: "BDT 50,000 added to wallet",
      time: "16m ago",
      icon: "/icons/walletwhite.png",
      color: "#10B981",
    },
    {
      title: "Visa Application Update",
      desc: "UK Visit Visa is under process",
      time: "1h ago",
      icon: "/icons/visaservice.png",
      color: "#3B82F6",
    },
    {
      title: "Hotel Booking Confirmed",
      desc: "Dubai, UAE | 3 Nights",
      time: "2h ago",
      icon: "/icons/hotelbooking.png",
      color: "#F59E0B",
    },
  ],
  reminders: [
    { name: "Umrah Group", sub: "Departure on 20 May 2024", badge: "Tomorrow", color: "bg-red-50 text-red-500", day: "20" },
    { name: "Visa Appointment", sub: "UK Visa - Dubai Center", badge: "5 Days Left", color: "bg-emerald-50 text-emerald-500", day: "25" },
  ],
};

const exchangeRate = {
  value: "USD 1 = BDT 117.50",
  change: "0.25%",
  lastLogin: "15 May 2024, 10:30 AM (IP: 103.45.67.89)",
  secure: true,
};

export { theme, sidebar, dashboardMetrics, exchangeRate };
