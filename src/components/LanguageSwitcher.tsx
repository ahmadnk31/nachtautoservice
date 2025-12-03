import React from "react";
import { Languages } from "lucide-react";
import { useI18n } from "@/i18n/context";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const languages = [
  { code: "nl" as const, name: "Nederlands", flag: "🇳🇱" },
  { code: "en" as const, name: "English", flag: "🇬🇧" },
  { code: "fr" as const, name: "Français", flag: "🇫🇷" },
];

export const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useI18n();
  const currentLang = languages.find((l) => l.code === language) || languages[0];

  return (
    <Select value={language} onValueChange={(value) => setLanguage(value as "nl" | "en" | "fr")}>
      <SelectTrigger className="h-9 w-auto min-w-[100px] max-w-[140px] border-border/60 bg-background/80 px-2 md:px-3">
        <div className="flex items-center gap-1.5 md:gap-2">
          <Languages className="h-3.5 w-3.5 shrink-0 text-muted-foreground md:h-4 md:w-4" />
          <SelectValue>
            <span className="flex items-center gap-1">
              <span className="text-sm">{currentLang.flag}</span>
              <span className="hidden lg:inline text-xs md:text-sm">{currentLang.name}</span>
              <span className="lg:hidden text-xs font-medium">{currentLang.code.toUpperCase()}</span>
            </span>
          </SelectValue>
        </div>
      </SelectTrigger>
      <SelectContent>
        {languages.map((lang) => (
          <SelectItem key={lang.code} value={lang.code}>
            <span className="flex items-center gap-2">
              <span>{lang.flag}</span>
              <span>{lang.name}</span>
            </span>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

