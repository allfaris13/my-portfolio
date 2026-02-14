"use client";
import React from "react";
import { Share2 } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface ShareButtonProps {
  title: string;
  excerpt: string;
}

export default function ShareButton({ title, excerpt }: ShareButtonProps) {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: title,
        text: excerpt,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <Button 
      variant="primary" 
      className="bg-gradient-primary hover:opacity-90"
      onClick={handleShare}
    >
      <Share2 size={18} className="mr-2" />
      Share Artikel
    </Button>
  );
}