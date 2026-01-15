import { useState, useEffect } from 'react';
import { Terminal } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const HackerModeToggle = () => {
    const [isHackerMode, setIsHackerMode] = useState(false);

    useEffect(() => {
        if (isHackerMode) {
            document.body.classList.add('hacker-mode');
        } else {
            document.body.classList.remove('hacker-mode');
        }
    }, [isHackerMode]);

    return (
        <div className="fixed bottom-6 right-6 z-50">
            <Button
                variant="outline"
                size="icon"
                onClick={() => setIsHackerMode(!isHackerMode)}
                className={`rounded-full shadow-lg border-2 transition-all duration-300 ${isHackerMode
                        ? 'bg-green-950 border-green-500 text-green-500 hover:bg-green-900 shadow-green-500/50'
                        : 'bg-background border-border hover:border-primary text-foreground'
                    }`}
            >
                <Terminal size={20} />
            </Button>

            {/* Global CSS for Hacker Mode */}
            <style>{`
        .hacker-mode {
          --background: 120 100% 5% !important;
          --foreground: 120 100% 50% !important;
          --primary: 120 100% 50% !important;
          --primary-foreground: 120 100% 5% !important;
          --muted: 120 50% 10% !important;
          --muted-foreground: 120 50% 40% !important;
          --border: 120 50% 20% !important;
          --card: 120 40% 5% !important;
        }

        .hacker-mode * {
          font-family: 'Courier New', monospace !important;
          border-radius: 0 !important;
          box-shadow: none !important;
        }

        .hacker-mode .glass-card {
          background: rgba(0, 20, 0, 0.9) !important;
          border: 1px solid #0f0 !important;
        }
        
        .hacker-mode img {
           filter: grayscale(100%) contrast(150%) brightness(0.8) sepia(100%) hue-rotate(50deg) saturate(300%) !important;
           mix-blend-mode: luminosity;
        }
      `}</style>
        </div>
    );
};
