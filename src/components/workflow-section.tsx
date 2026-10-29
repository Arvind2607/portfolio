import React from 'react';
import { Search, Compass, Code2, ShieldCheck, Rocket, GitBranch } from 'lucide-react';
import { WorkProcessStep } from '../types/portfolio';

interface WorkflowSectionProps {
  workflow: WorkProcessStep[];
}

export function WorkflowSection({ workflow }: WorkflowSectionProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'discover':
        return <Search className="w-5 h-5 text-[#e50920]" />;
      case 'plan':
        return <Compass className="w-5 h-5 text-[#e50920]" />;
      case 'develop':
        return <Code2 className="w-5 h-5 text-[#e50920]" />;
      case 'validate':
        return <ShieldCheck className="w-5 h-5 text-[#e50920]" />;
      case 'deploy':
        return <Rocket className="w-5 h-5 text-[#e50920]" />;
      default:
        return <GitBranch className="w-5 h-5 text-[#e50920]" />;
    }
  };

  return (
    <section id="workflow" className="py-24 bg-[#080808] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#e50920] uppercase font-semibold mb-2">
            <GitBranch className="w-4 h-4 text-[#e50920]" />
            <span>SYSTEM ENGINEERING DISCIPLINE</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl text-white tracking-tight mb-4">
            HOW I BUILD SOFTWARE
          </h2>
          <p className="text-gray-400 text-sm">
            A structured five-phase engineering lifecycle applied from bare-metal microcontrollers to high-availability web applications.
          </p>
        </div>

        {/* 5-Step Workflow Cards with connecting flow */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 relative">
          {workflow.map((item, index) => (
            <div
              key={item.step}
              className="relative p-6 rounded-2xl bg-[#0f1117] border border-white/10 hover:border-[#e50920]/60 transition-all duration-300 flex flex-col justify-between group shadow-md hover:shadow-[0_8px_25px_rgba(229,9,32,0.15)]"
            >
              {/* Step Number & Icon */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-display text-4xl text-gray-700 group-hover:text-[#e50920] transition-colors leading-none">
                    {item.step}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/10 group-hover:border-[#e50920]/40 flex items-center justify-center transition-colors">
                    {getIcon(item.iconName)}
                  </div>
                </div>

                {/* Step Title */}
                <h3 className="font-display text-xl text-white tracking-wide mb-2 group-hover:text-[#e50920] transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-xs leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Bottom connecting accent indicator */}
              <div className="mt-6 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-gray-500">
                <span>PHASE {item.step}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#e50920]/40 group-hover:bg-[#e50920] transition-colors" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

