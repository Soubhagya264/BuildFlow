import BarChart from "@/components/icons/bar_chart";
import Calendar from "@/components/icons/calendar";
import CheckCircle from "@/components/icons/check_circled";
import Chip from "@/components/icons/chip";
import ClipboardIcon from "@/components/icons/clipboardIcon";
import Compass from "@/components/icons/compass";
import Database from "@/components/icons/database";
import Flag from "@/components/icons/flag";
import Headphone from "@/components/icons/headphone";
import Home from "@/components/icons/home";
import Info from "@/components/icons/info";
import LinkIcon from "@/components/icons/link";
import Lock from "@/components/icons/lock";
import Message from "@/components/icons/messages";
import Notification from "@/components/icons/notification";
import Payment from "@/components/icons/payment";
import Person from "@/components/icons/person";
import Pipelines from "@/components/icons/pipelines";
import BuildflowCategory from "@/components/icons/buildflow-category";
import Power from "@/components/icons/power";
import Receipt from "@/components/icons/receipt";
import Send from "@/components/icons/send";
import Settings from "@/components/icons/settings";
import Shield from "@/components/icons/shield";
import Star from "@/components/icons/star";
import Tune from "@/components/icons/tune";
import Video from "@/components/icons/video_recorder";
import Wallet from "@/components/icons/wallet";
import Warning from "@/components/icons/warning";

export const pricingCards = [
  {
    planName: "Starter",
    description: "Perfect for trying out BuildFlow",
    price: "Free",
    features: [
      "Custom drag & drop editor",
      "Limited AI prompts per month",
      "3 sub-accounts",
      "2 team members",
      "Unlimited pipelines",
    ],
    buttonText: "Get Started",
    buttonVariant: "outlined",
    priceId: "",
     // ⬅️ makes Starter button outlined
  },
  {
    planName: "Basic",
    description: "For serious agency owners",
    price: "49",
    features: [
      "Unlimited sub-accounts",
      "Unlimited team members",
      "Advanced drag & drop components",
      "AI section & page generation",
      "Premium website templates",
      "Custom domains & SSL",
    ],
    buttonText: "Choose Basic",
    buttonVariant: "primary",
     priceId: "price_1QuUPCSE0O1YVp07YiIroInV",
  },
  {
    planName: "Unlimited SaaS",
    description: "The ultimate agency kit",
    price: "199",
    features: [
      "White-label builder",
      "Unlimited AI prompts per month",
      "Client portal & user management",
      "Rebilling & usage-based pricing",
      "Priority 24/7 support team",
      "Dedicated onboarding specialist",
    ],
    buttonText: "Go Unlimited",
    isPopular: true, // ⬅️ highlights with border and badge
    buttonVariant: "primary",
    priceId: "price_1QuUPCSE0O1YVp07BYQNr48R"
  },
];



export const addOnProducts = [
  { title: "Priority Support", id: "prod_Ro7jftYpff7tyJ" },
];

export const icons = [
  {
    value: "chart",
    label: "Bar Chart",
    path: BarChart,
  },
  {
    value: "headphone",
    label: "Headphones",
    path: Headphone,
  },
  {
    value: "send",
    label: "Send",
    path: Send,
  },
  {
    value: "pipelines",
    label: "Pipelines",
    path: Pipelines,
  },
  {
    value: "calendar",
    label: "Calendar",
    path: Calendar,
  },
  {
    value: "settings",
    label: "Settings",
    path: Settings,
  },
  {
    value: "check",
    label: "Check Circled",
    path: CheckCircle,
  },
  {
    value: "chip",
    label: "Chip",
    path: Chip,
  },
  {
    value: "compass",
    label: "Compass",
    path: Compass,
  },
  {
    value: "database",
    label: "Database",
    path: Database,
  },
  {
    value: "flag",
    label: "Flag",
    path: Flag,
  },
  {
    value: "home",
    label: "Home",
    path: Home,
  },
  {
    value: "info",
    label: "Info",
    path: Info,
  },
  {
    value: "link",
    label: "Link",
    path: LinkIcon,
  },
  {
    value: "lock",
    label: "Lock",
    path: Lock,
  },
  {
    value: "messages",
    label: "Messages",
    path: Message,
  },
  {
    value: "notification",
    label: "Notification",
    path: Notification,
  },
  {
    value: "payment",
    label: "Payment",
    path: Payment,
  },
  {
    value: "power",
    label: "Power",
    path: Power,
  },
  {
    value: "receipt",
    label: "Receipt",
    path: Receipt,
  },
  {
    value: "shield",
    label: "Shield",
    path: Shield,
  },
  {
    value: "star",
    label: "Star",
    path: Star,
  },
  {
    value: "tune",
    label: "Tune",
    path: Tune,
  },
  {
    value: "videorecorder",
    label: "Video Recorder",
    path: Video,
  },
  {
    value: "wallet",
    label: "Wallet",
    path: Wallet,
  },
  {
    value: "warning",
    label: "Warning",
    path: Warning,
  },
  {
    value: "person",
    label: "Person",
    path: Person,
  },
  {
    value: "category",
    label: "Category",
    path: BuildflowCategory,
  },
  {
    value: "clipboardIcon",
    label: "Clipboard Icon",
    path: ClipboardIcon,
  },
];

export type EditorBtns =
  | "text"
  | "container"
  | "section"
  | "contactForm"
  | "paymentForm"
  | "link"
  | "2Col"
  | "video"
  | "__body"
  | "image"
  | null
  | "3Col";

export const defaultStyles: React.CSSProperties = {
  backgroundPosition: "center",
  objectFit: "cover",
  backgroundRepeat: "no-repeat",
  textAlign: "left",
  opacity: "100%",
};
