import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "./ThemeProvider"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="transition-smooth hover:bg-primary/10"
    >
      {theme === "light" ? (
        <Moon className="h-4 w-4 transition-smooth" />
      ) : (
        <Sun className="h-4 w-4 transition-smooth" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}