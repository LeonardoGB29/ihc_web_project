import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Folder, GitBranch, Users, Workflow, Menu, X, ArrowUp, House } from "lucide-react";
import { cn } from "@/lib/utils";

interface RadialMenuProps {
  activeSection: string;
  onNavigate: (section: string) => void;
  showGoUp: boolean;
  onGoUp: () => void;
  processStep?: number;
  onProcessStepChange?: (step: number) => void;
}

const menuItems = [
  { id: 'home', label: 'Inicio', icon: House },
  { id: 'projects', label: 'Proyectos', icon: Folder },
  { id: 'process', label: 'Proceso', icon: Workflow },
  { id: 'team', label: 'Integrantes', icon: Users },
];

const RadialMenu = ({
  activeSection,
  onNavigate,
  showGoUp,
  onGoUp,
  processStep = 1,
  onProcessStepChange,
}: RadialMenuProps) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (isMobile) {
    return (
      <>
        {/* Mobile FAB */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="fixed top-6 left-6 z-50 w-12 h-12 bg-purple border border-purple-border rounded-full flex items-center justify-center text-white hover:bg-purple/90 transition-smooth shadow-elevated focus:outline-none focus:ring-2 focus:ring-cyan focus:ring-offset-2 focus:ring-offset-background"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

        {/* Mobile Side Panel */}
        {isOpen && (
          <div className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm" onClick={() => setIsOpen(false)}>
            <div
              className="fixed left-0 top-0 h-full w-64 bg-surface border-r border-purple-border p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mt-16 space-y-4">
                {showGoUp && (
                  <button
                    onClick={() => {
                      onGoUp();
                      setIsOpen(false);
                    }}
                    className="w-full flex items-center gap-3 p-3 rounded-lg transition-smooth bg-cyan text-white hover:bg-cyan/90 focus:outline-none focus:ring-2 focus:ring-cyan focus:ring-offset-2 focus:ring-offset-background"
                    aria-label="Ir arriba"
                  >
                    <ArrowUp className="w-5 h-5" />
                    Ir arriba
                  </button>
                )}

                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      onNavigate(item.id);
                      setIsOpen(false);
                    }}
                    className={cn(
                      "w-full flex items-center gap-3 p-3 rounded-lg transition-smooth focus:outline-none focus:ring-2 focus:ring-cyan focus:ring-offset-2 focus:ring-offset-background",
                      activeSection === item.id
                        ? "bg-purple text-white border border-cyan"
                        : "text-text-secondary hover:text-text-primary hover:bg-purple-translucent"
                    )}
                    aria-label={`Navegar a ${item.label}`}
                  >
                    <item.icon className="w-5 h-5" />
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </>
    );
  }

  // Ajuste vertical semicircular
  const radius = 110; // un semicirculo
  const startAngle = -0; // desde arriba
  const endAngle = 180; // hacia abajo
  const angleStep = (endAngle - startAngle) / (menuItems.length - 1);
  const menuOffsetX = 150; // spacing from left
  const showProjectSubs =
    activeSection === 'projects' ||
    activeSection === 'project-vr' ||
    activeSection === 'project-blandy';
  const isProjectsContext = showProjectSubs; // highlight projects when in any project view

  // Animated purple indicator ("bola morada") con soporte a subproyectos
  const subsForHighlight = [
    { id: 'project-vr', theta: -25 },
    { id: 'project-blandy', theta: 25 },
  ];
  const projectsIdx = menuItems.findIndex((m) => m.id === 'projects');
  const projectsAng = startAngle + projectsIdx * angleStep;
  const projectsRad = (projectsAng * Math.PI) / 180;
  const baseX = Math.sin(projectsRad) * radius + menuOffsetX;
  const baseY = -Math.cos(projectsRad) * radius;
  const subRadius = 125;

  const isSubActive = subsForHighlight.find((s) => s.id === activeSection);

  let activeX: number, activeY: number;
  if (isSubActive) {
    const t = (isSubActive.theta * Math.PI) / 180;
    activeX = baseX + Math.cos(t) * subRadius;
    activeY = baseY + Math.sin(t) * subRadius;
  } else {
    const mainIds = menuItems.map((m) => m.id);
    const highlightId = mainIds.includes(activeSection) ? activeSection : 'projects';
    const foundIndex = menuItems.findIndex((m) => m.id === highlightId);
    const activeIndex = foundIndex >= 0 ? foundIndex : 0;
    const activeAngle = startAngle + activeIndex * angleStep;
    const activeRad = (activeAngle * Math.PI) / 180;
    activeX = Math.sin(activeRad) * radius + menuOffsetX;
    activeY = -Math.cos(activeRad) * radius;
  }
  const [pulse, setPulse] = useState(0);
  const [rippleOffset, setRippleOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  const triggerRippleFromEvent = (e: React.MouseEvent) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    setRippleOffset({ x: e.clientX - cx, y: e.clientY - cy });
    setPulse((p) => p + 1);
  };

  return (
    <div className="fixed left-0 top-1/2 transform -translate-y-1/2 flex items-center justify-start w-1/4 z-30">
      <div className="relative w-28 h-[calc(100%)]">
        {/* Moving purple indicator behind the active item */}
        <motion.div
          className="absolute rounded-full -translate-x-1/2 -translate-y-1/2 bg-purple border border-cyan shadow-elevated pointer-events-none z-0"
          style={{ width: 84, height: 84 }}
          animate={{ left: `${activeX}px`, top: `calc(50% + ${activeY}px)` }}
          transition={{ type: "spring", stiffness: 300, damping: 24, mass: 0.7 }}
        >
          {/* ripple effect */}
          <AnimatePresence mode="popLayout">
            <motion.span
              key={pulse}
              className="absolute rounded-full"
              style={{ left: `calc(50% + ${rippleOffset.x}px)`, top: `calc(50% + ${rippleOffset.y}px)`, width: 4, height: 4, transform: 'translate(-50%, -50%)', border: '2px solid rgba(0,255,255,0.5)' }}
              initial={{ scale: 0.6, opacity: 0.6 }}
              animate={{ scale: 18, opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
          </AnimatePresence>
        </motion.div>

        {menuItems.map((item, index) => {
          const angle = startAngle + index * angleStep;
          const rad = (angle * Math.PI) / 180;
          const x = Math.sin(rad) * radius + menuOffsetX;
          const y = -Math.cos(rad) * radius;

          const isProjectsNode = item.id === 'projects';
          const isActive = isProjectsNode ? isProjectsContext : activeSection === item.id;
          return (
            <motion.button
              key={item.id}
              onClick={(e) => {
                triggerRippleFromEvent(e);
                onNavigate(item.id);
              }}
              className={cn(
                "absolute z-10 w-20 h-20 rounded-full flex flex-col items-center justify-center text-xs transition-smooth transform -translate-x-1/2 -translate-y-1/2 border group focus:outline-none focus:ring-2 focus:ring-cyan focus:ring-offset-2 focus:ring-offset-background",
                isActive
                  ? "text-white border-transparent"
                  : "bg-surface text-text-secondary border-purple-border hover:text-text-primary hover:bg-purple-translucent hover:border-cyan/50"
              )}
              style={{
                left: `${x}px`,
                top: `calc(50% + ${y}px)`,
              }}
              animate={{ scale: isActive ? 1.18 : 0.88 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              aria-label={`Navegar a ${item.label}`}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  onNavigate(item.id);
                  setPulse((p) => p + 1);
                }
              }}
            >
              <item.icon className="w-6 h-6 mb-1" />
              <span className="text-[11px] font-medium leading-tight px-1">{item.label}</span>
            </motion.button>
          );
        })}

        {showGoUp && (
          <button
            onClick={onGoUp}
            className={cn(
              "absolute left-1/2 top-1/2 w-12 h-12 bg-cyan text-white border-2 border-cyan rounded-full transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center transition-smooth hover:scale-110 hover:bg-cyan/90 focus:outline-none focus:ring-2 focus:ring-cyan focus:ring-offset-2 focus:ring-offset-background shadow-elevated motion-reduce:hover:scale-100"
            )}
            aria-label="Ir arriba"
            title="Ir arriba"
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onGoUp();
              }
            }}
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}
        {/* Central hub when not showing go up */}
          {!showGoUp && (
            <div className="absolute left-1/2 top-1/2 w-6 h-6 bg-purple-translucent border-2 border-purple-border rounded-full transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
              <div className="w-2 h-2 bg-purple rounded-full" />
            </div>
          )}
      </div>
      {/* Submenú radial que aparece al seleccionar "Proyectos" */}
      {showProjectSubs && (
        <div className="absolute inset-0">
          {(() => {
            const index = menuItems.findIndex((m) => m.id === 'projects');
            const angle = startAngle + index * angleStep;
            const rad = (angle * Math.PI) / 180;
            const baseX = Math.sin(rad) * radius + menuOffsetX;
            const baseY = -Math.cos(rad) * radius;
            const subRadius = 125; // increase distance from Projects button
            const thetas = [-25, 25];
            const subs = [
              { id: 'project-vr', label: 'VR', Icon: GitBranch },
              { id: 'project-blandy', label: 'Blandy', Icon: Folder },
            ];
            return subs.map((s, i) => {
              const t = (thetas[i] * Math.PI) / 180;
              const sx = baseX + Math.cos(t) * subRadius;
              const sy = baseY + Math.sin(t) * subRadius;
              return (
                <motion.button
                  key={s.id}
                  onClick={(e) => { triggerRippleFromEvent(e); onNavigate(s.id); }}
                  className={cn(
                    "absolute z-10 w-16 h-16 rounded-full flex flex-col items-center justify-center text-[10px] border transition-smooth transform -translate-x-1/2 -translate-y-1/2 bg-surface text-text-secondary border-purple-border hover:text-text-primary hover:bg-purple-translucent hover:border-cyan/50 focus:outline-none focus:ring-2 focus:ring-cyan focus:ring-offset-2 focus:ring-offset-background"
                  )}
                  style={{ left: `${sx}px`, top: `calc(50% + ${sy}px)` }}
                  animate={{ scale: activeSection === s.id ? 1.12 : 0.85 }}
                  transition={{ type: "spring", stiffness: 280, damping: 20 }}
                  aria-label={`Abrir ${s.label}`}
                >
                  <s.Icon className="w-5 h-5 mb-0.5" />
                  {s.label}
                </motion.button>
              );
            });
          })()}
        </div>
      )}
    </div>
  );
};

export default RadialMenu;



