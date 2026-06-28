"use client";

import MenuItem from "@/components/common/UI/MenuItem";
import Typography from "@/components/common/UI/Typography";
import Box from "@/components/common/UI/Box";

import { Check, Languages } from "lucide-react";

interface LanguageMenuProps {
    currentLanguage: string;
    onChangeLanguage: (
        language: string
    ) => void;
}

const languages = [
    { code: "es", label: "Español",},
    { code: "en", label: "English",},
    { code: "pt", label: "Português",},
];

export default function LanguageMenu({
    currentLanguage,
    onChangeLanguage,
}: LanguageMenuProps) {

    return (
        <Box className="flex flex-col">
            <Typography
                variant="note"
                className="
                    px-3
                    pb-1
                    text-foreground-muted
                "
            >
                Idioma
            </Typography>

            {languages.map(language => (
                <MenuItem
                    key={language.code}
                    icon={Languages}
                    onClick={() =>
                        onChangeLanguage(language.code)
                    }
                >
                    <div className="
                        flex
                        w-full
                        items-center
                        justify-between
                    ">
                        <span>
                            {language.label}
                        </span>

                        {currentLanguage === language.code && (
                            <Check size={18} />
                        )}
                    </div>
                </MenuItem>
            ))}
        </Box>
    );
}