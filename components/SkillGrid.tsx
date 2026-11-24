import type { ElementType } from "react";
import {
  SiFigma,
  SiFlutter,
  SiGodotengine,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTypescript,
  SiUnity,
} from "react-icons/si";

const groups: {
  label: string;
  note: string;
  items: { name: string; Icon: ElementType; color: string }[];
}[] = [
  {
    label: "Web",
    note: "Full-stack product work",
    items: [
      { name: "React", Icon: SiReact, color: "#149ECA" },
      { name: "Next.js", Icon: SiNextdotjs, color: "#111111" },
      { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
      { name: "Node.js", Icon: SiNodedotjs, color: "#3C873A" },
    ],
  },
  {
    label: "Mobile apps",
    note: "iOS and Android",
    items: [
      { name: "Flutter", Icon: SiFlutter, color: "#02569B" },
      { name: "React Native", Icon: SiReact, color: "#087EA4" },
    ],
  },
  {
    label: "Games",
    note: "Mobile arcade and casual",
    items: [
      { name: "Godot / GDScript", Icon: SiGodotengine, color: "#478CBF" },
      { name: "Unity / C#", Icon: SiUnity, color: "#222222" },
    ],
  },
  {
    label: "UI/UX",
    note: "Concepts through to build",
    items: [{ name: "Figma", Icon: SiFigma, color: "#F24E1E" }],
  },
];

export default function SkillGrid() {
  return (
    <ul className="skill-grid">
      {groups.map((group) => (
        <li key={group.label} className="skill-card">
          <h3>{group.label}</h3>
          <p>{group.note}</p>
          <ul>
            {group.items.map((item) => (
              <li key={item.name}>
                <item.Icon aria-hidden="true" color={item.color} />
                <span>{item.name}</span>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}
