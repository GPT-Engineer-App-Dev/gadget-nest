import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { CircleUser, Menu, Package2, Search } from "lucide-react";
import { NavLink, Outlet } from "react-router-dom";
import { navItems } from "../App";
import { useState } from "react";

const Layout = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6 justify-between">
        <DesktopNav />
        <MobileNav />
        <div className="flex-1 flex items-center justify-center">
          <div className="w-full max-w-sm flex items-center space-x-2">
            <Input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={handleSearch}
              className="w-full"
            />
            <Button type="submit" size="icon">
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <UserMenu />
      </header>
      <main className="flex-grow overflow-auto">
        <Outlet context={{ searchQuery }} />
      </main>
    </div>
  );
};

// ... (rest of the code remains unchanged)

export default Layout;