import { FaEnvelope, FaBell, FaKey, FaClock } from "react-icons/fa";
import { IoIosSwitch } from "react-icons/io";
import { FaGoogle, FaMicrosoft, FaUserShield } from "react-icons/fa";
import {
  FaSyncAlt,
  FaServer,
  FaUser,
  FaLock,
  FaFolderOpen,
  FaExclamationTriangle,
  FaToggleOn,
  FaCalendarCheck,
} from "react-icons/fa";
import { FaBuilding, FaInfoCircle, FaCogs } from "react-icons/fa"; 
import { MdDomainVerification } from "react-icons/md";

export const organizationSettings = [
    {
        icon: MdDomainVerification,
        title: "Set Up Login Domain",
        description:
          "Organizations can set up the login domain by selecting any domain they want.",
        color: "text-green-600",
      },
      {
        icon: FaBuilding,
        title: "Setting Up an Organization",
        description:
          "This interface is essential when onboarding a new organization into a system, as it allows users to configure foundational settings (name, domain, login domains, etc.).",
        color: "text-purple-600",
      },
      {
        icon: FaInfoCircle,
        title: "Updating Organization Information",
        description:
          "This interface can be used to update key details such as domains, IP addresses, or provisioning settings as organizations grow or change.",
        color: "text-red-600",
      },
      {
        icon: FaLock,
        title: "Managing Access Control",
        description:
          'The toggle for "Default Role & Rights" manages how users are given roles and permissions across the organization, ensuring security and ease of access.',
        color: "text-orange-600",
      },
      {
        icon: FaCogs,
        title: "Automating Processes",
        description:
          'Enabling "Automated Provisioning" helps automate provisioning of resources (e.g.system, host, permissions), making ongoing administration smoother.',
        color: "text-cyan-600",
      },
  ];
  
export const EmailProviderSettingsData = [
  {
    icon: FaEnvelope,
    title: "Email Configuration",
    description:
      "Set up email communication settings to ensure system emails are sent through the chosen provider.",
    color: "text-blue-500",
  },
  {
    icon: FaBell,
    title: "Setting Up Automated Notifications",
    description:
      "Automate notifications for department changes, tickets, and reviews via cron jobs.",
    color: "text-yellow-500",
  },
  {
    icon: FaKey,
    title: "Managing Email Credentials",
    description:
      "Provide the correct email and password credentials to authenticate the email service.",
    color: "text-red-500",
  },
  {
    icon: FaClock,
    title: "Time-based Notifications",
    description:
      "Set specific times for notifications to send reminders for events such as ticket management.",
    color: "text-green-500",
  },
];

export const oauthProvidersData = [
  {
    icon: FaKey,
    title: "Local",
    description: [
      {
        label: "What it is:",
        content:
          "Local OAuth provider handles authentication within your own system.",
      },
      {
        label: "When to use it:",
        content:
          "Manage users directly in your app without third-party integrations.",
      },
    ],
    color: "text-indigo-400",
  },
  {
    icon: FaGoogle,
    title: "Google",
    description: [
      {
        label: "What it is:",
        content: "OAuth login using Google accounts for authentication.",
      },
      {
        label: "When to use it:",
        content:
          "Use when you want users to authenticate via their Google accounts.",
      },
    ],
    color: "text-red-400",
  },
  {
    icon: FaMicrosoft,
    title: "Office 365",
    description: [
      {
        label: "What it is:",
        content:
          "OAuth login using Office 365, allowing users to authenticate with Microsoft credentials.",
      },
      {
        label: "When to use it:",
        content:
          "Ideal if your organization uses Office 365 for email and collaboration.",
      },
    ],
    color: "text-blue-600",
  },
  {
    icon: FaUserShield,
    title: "AD Login",
    description: [
      {
        label: "What it is:",
        content:
          "OAuth login using Active Directory (AD) for enterprise-level authentication.",
      },
      {
        label: "When to use it:",
        content:
          "Use this when you need to authenticate users via Active Directory.",
      },
    ],
    color: "text-green-400",
  },
];
export const syncSettingsData = [
  {
    id: 1,
    icon: FaSyncAlt,
    title: "Type of Resource",
    color: "text-blue-600",
    description: [
      {
        label: "What it is:",
        content:
          "Dropdown to select the type of resource for data synchronization.",
      },
      {
        label: "When to Use It:",
        content:
          "Select the appropriate resource type (SFTP, HTTP, or NIA) based on your data transfer requirements.",
      },
    ],
  },
  {
    id: 2,
    icon: FaServer,
    title: "Host",
    color: "text-green-600",
    description: [
      {
        label: "What it is:",
        content:
          "The IP address or domain name of the server for synchronization.",
      },
      {
        label: "When to Use It:",
        content:
          "Use this when you need to connect to a specific server for data synchronization.",
      },
    ],
  },
  {
    id: 3,
    icon: FaUser,
    title: "Username",
    color: "text-orange-600",
    description: [
      {
        label: "What it is:",
        content:
          "The username for authenticating against the specified resource.",
      },
      {
        label: "When to Use It:",
        content:
          "Enter the username when connecting to a secure server that requires authentication.",
      },
    ],
  },
  {
    id: 4,
    icon: FaLock,
    title: "Password",
    color: "text-red-600",
    description: [
      {
        label: "What it is:",
        content:
          "The password associated with the username for authentication.",
      },
      {
        label: "When to Use It:",
        content:
          "Provide the password necessary for secure access to the resource.",
      },
    ],
  },
  {
    id: 5,
    icon: FaFolderOpen,
    title: "File Path For (FTP)",
    color: "text-purple-600",
    description: [
      {
        label: "What it is:",
        content:
          "The file path where the data file is located on the FTP server.",
      },
      {
        label: "When to Use It:",
        content:
          "Specify the path when you need to access a specific file for data synchronization.",
      },
    ],
  },
  {
    id: 6,
    icon: FaExclamationTriangle,
    title: "Maximum Accepted Differences",
    color: "text-yellow-600",
    description: [
      {
        label: "What it is:",
        content:
          "The threshold for the number of discrepancies allowed during synchronization.",
      },
      {
        label: "When to Use It:",
        content:
          "Set this when you want to define acceptable limits for data differences between local and remote sources.",
      },
    ],
  },
  {
    id: 7,
    icon: IoIosSwitch,
    title: "Data Sync Toggle",
    color: "text-teal-600",
    description: [
      {
        label: "What it is:",
        content: "A switch to enable or disable data synchronization.",
      },
      {
        label: "When to Use It:",
        content:
          "Use this to activate or deactivate the synchronization process based on your operational needs.",
      },
    ],
  },
  {
    id: 8,
    icon: FaSyncAlt,
    title: "Auto Sync Enabled Domains",
    color: "text-indigo-600",
    description: [
      {
        label: "What it is:",
        content: "A list of domains set for automatic data synchronization.",
      },
      {
        label: "When to Use It:",
        content:
          "Update this list to control which domains should automatically sync user data.",
      },
    ],
  },
  {
    id: 9,
    icon: FaCalendarCheck,
    title: "Day of the Week Toggles",
    color: "text-blue-600",
    description: [
      {
        label: "What it is:",
        content: "Options to enable or disable syncing on specific days.",
      },
      {
        label: "When to Use It:",
        content:
          "Use these toggles to schedule syncing activities on preferred days.",
      },
    ],
  },
  {
    id: 10,
    icon: FaClock,
    title: "Time Zone",
    color: "text-green-600",
    description: [
      {
        label: "What it is:",
        content: "The time zone setting for synchronization activities.",
      },
      {
        label: "When to Use It:",
        content:
          "Select the appropriate time zone to ensure synchronization occurs at the correct local time.",
      },
    ],
  },
  {
    id: 11,
    icon: FaClock,
    title: "Sync Time",
    color: "text-purple-600",
    description: [
      {
        label: "What it is:",
        content: "The specific time for data synchronization.",
      },
      {
        label: "When to Use It:",
        content:
          "Set this time when you want the synchronization process to run daily.",
      },
    ],
  },
];
export const transferProtocols = [
    {
      id: 1,
      icon: FaSyncAlt,
      title: "SFTP",
      color: "text-blue-600",
      description: [
        {
          label: "What it is:",
          content: "Secure File Transfer Protocol for secure file transfers.",
        },
        {
          label: "When to Use It:",
          content:
            "Use SFTP when you need to securely transfer files, especially sensitive data.",
        },
      ],
    },
    {
      id: 2,
      icon: FaSyncAlt,
      title: "HTTP",
      color: "text-blue-600",
      description: [
        {
          label: "What it is:",
          content: "HyperText Transfer Protocol for web-based data transfers.",
        },
        {
          label: "When to Use It:",
          content:
            "Use HTTP for general data transfers where encryption is not a priority.",
        },
      ],
    },
    {
      id: 3,
      icon: FaSyncAlt,
      title: "NIA",
      color: "text-blue-600",
      description: [
        {
          label: "What it is:",
          content:
            "A specific internal resource or API for user data synchronization.",
        },
        {
          label: "When to Use It:",
          content:
            "Use NIA when your application requires a dedicated interface for syncing data in a particular format.",
        },
      ],
    },
  ];
  export const orgRole = [
    {
      icon: FaEnvelope,
      title: "Add New role",
      description:
        "Set up organization new role to ensure who can access the system.",
      color: "text-blue-500",
    },
    {
      icon: FaBell,
      title: "Organization Role List",
      description:
        "Showing organization role list with access.",
      color: "text-yellow-500",
    },
    {
      icon: FaKey,
      title: "Edit the role with access",
      description:
        "Organization can easily edit the access with role based.",
      color: "text-red-500",
    },
  ];
  