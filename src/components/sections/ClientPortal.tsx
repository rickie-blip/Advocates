import React, { useState } from 'react';
import { PortalMessage } from '../../types';

interface ClientPortalProps {
  onTriggerToast: (msg: string, type?: 'success' | 'error' | 'info') => void;
}

const INITIAL_MESSAGES: PortalMessage[] = [
  { sender: 'Attorney Victoria Sterling', text: 'I have finalized the draft of the Series B Financing agreement. Let me know if you would like to run through the governance provisions tomorrow morning.', time: '10:14 AM' },
  { sender: 'You', text: 'Looks perfect. Let us do a call tomorrow at 10 AM EST.', time: '11:30 AM' },
];

export default function ClientPortal({ onTriggerToast }: ClientPortalProps) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [messages, setMessages] = useState<PortalMessage[]>(INITIAL_MESSAGES);
  const [newMsg, setNewMsg] = useState('');

  const handleLogin = () => { setIsLoggedIn(true); onTriggerToast('Success: Authorized secure client console.', 'success'); };
  const handleLogout = () => { setIsLoggedIn(false); onTriggerToast('Securely logged out.', 'info'); };

  const handleSendMsg = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMsg.trim()) return;
    setMessages([...messages, { sender: 'You', text: newMsg, time: 'Just Now' }]);
    setNewMsg('');
    onTriggerToast('Secure encrypted message successfully dispatched.', 'success');
  };

  return (
    <section id="client-portal" className="py-14 sm:py-20 bg-gray-50 dark:bg-[#0F141F] transition-colors border-b border-gray-150 dark:border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-5 space-y-5 sm:space-y-6 text-left">
            <span className="text-[10px] font-sans font-black uppercase text-amber-600 dark:text-[#C59B27] tracking-widest block">Client Transparency Portal</span>
            <h2 className="text-3xl sm:text-4xl font-serif text-slate-900 dark:text-slate-100 font-bold">Encrypted Strategic Collaboration Portal</h2>
            <div className="w-16 h-1 bg-[#C59B27] rounded-none"></div>
            <p className="text-sm text-gray-600 dark:text-slate-300 font-sans leading-relaxed">
              Experience high-caliber legal transparency. Our elite clients gain access to immediate documentation reviews, encrypted communication direct lines with senior partners, action status trackers, and secure balance calculations.
            </p>
            <div className="pt-4 space-y-3 font-sans text-xs text-gray-500">
              {['AES-256 Bit Data Shielding Standards', 'Direct Active File Trackers & Depositions', 'Real-time Secure Retainer Ledgers'].map(item => (
                <p key={item} className="flex items-center space-x-2"><span className="text-emerald-500">✓</span><span>{item}</span></p>
              ))}
            </div>
            {!isLoggedIn && (
              <button onClick={handleLogin} className="w-full sm:w-auto bg-slate-900 dark:bg-slate-800 hover:bg-[#C59B27] text-slate-200 text-xs font-sans font-bold uppercase tracking-wider py-3 px-6 border border-gray-700">
                Simulate Secure Access Demo
              </button>
            )}
          </div>

          <div className="lg:col-span-7 min-w-0 bg-white dark:bg-[#101625] border border-gray-150 dark:border-slate-850 p-4 sm:p-8 shadow-2xl">
            {!isLoggedIn ? (
              <div className="space-y-6">
                <div className="text-center pb-4 border-b border-gray-150 dark:border-slate-800">
                  <span className="text-2xl">🔒</span>
                  <h3 className="text-lg font-serif font-bold text-slate-900 dark:text-slate-100 mt-2">Access Client Console</h3>
                  <p className="text-[10px] text-gray-400 font-sans uppercase tracking-widest mt-1">E2E Secure Channel Connection</p>
                </div>
                <div className="space-y-4">
                  {[
                    { label: 'Corporate Client Email', value: 'sterling.ventures@client.com', type: 'text' },
                    { label: 'Client Password Access', value: '••••••••', type: 'password' },
                  ].map(field => (
                    <div key={field.label}>
                      <label className="block text-[10px] font-sans font-black text-gray-400 uppercase tracking-wider mb-1">{field.label}</label>
                      <input type={field.type} disabled value={field.value}
                        className="w-full bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-800 text-gray-700 dark:text-slate-300 py-3 px-4 text-xs font-sans font-semibold rounded-none focus:outline-none" />
                    </div>
                  ))}
                </div>
                <button onClick={handleLogin} className="w-full text-center bg-[#C59B27] hover:bg-amber-600 text-white py-3.5 font-sans font-extrabold text-xs uppercase tracking-widest border border-amber-300">
                  Authenticate Secure Access Demo
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="flex flex-col gap-3 sm:flex-row sm:justify-between sm:items-center pb-4 border-b border-gray-150 dark:border-slate-800 text-xs font-sans">
                  <div className="min-w-0">
                    <p className="text-[10px] text-emerald-500 font-black uppercase tracking-widest flex items-center">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block mr-1.5 animate-ping"></span>Client Secured
                    </p>
                    <p className="font-bold text-slate-900 dark:text-slate-100 mt-1 break-words">SUMMIT ACQUISITION DEALS — SECURED PORTAL</p>
                  </div>
                  <button onClick={handleLogout} className="self-start sm:self-auto text-red-500 font-bold uppercase tracking-wider text-[10px] hover:underline">Exit Demo</button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-sans text-center">
                  {[
                    { label: 'File Status', value: 'Drafting Board' },
                    { label: 'Assigned Counsel', value: 'Victoria Sterling' },
                    { label: 'Next Depositions', value: 'August 14, 2026' },
                  ].map(stat => (
                    <div key={stat.label} className="bg-gray-50 dark:bg-slate-900 p-3 border-l-2 border-[#C59B27]">
                      <p className="text-[9px] text-gray-400 font-black uppercase tracking-wider">{stat.label}</p>
                      <p className="text-xs font-bold text-[#C59B27] mt-1">{stat.value}</p>
                    </div>
                  ))}
                </div>

                <div className="space-y-3 bg-gray-50 dark:bg-[#0B0F19] p-4 border border-gray-150 dark:border-slate-850">
                  <p className="text-[9px] font-sans font-black text-gray-400 tracking-wider uppercase">Direct Line Secured Messages</p>
                  <div className="space-y-3 max-h-44 overflow-y-auto pr-2 text-xs font-sans">
                    {messages.map((msg, idx) => (
                      <div key={idx} className={`p-3 max-w-full sm:max-w-sm break-words rounded-none border ${msg.sender === 'You' ? 'bg-amber-500/10 text-slate-800 dark:text-slate-100 ml-auto border-amber-500/20' : 'bg-white dark:bg-slate-900 text-gray-600 dark:text-slate-300 border-gray-200 dark:border-slate-800'}`}>
                        <p className="text-[9px] font-black uppercase text-amber-600 dark:text-[#C59B27]">{msg.sender}</p>
                        <p className="mt-1 leading-relaxed">{msg.text}</p>
                        <span className="text-[8px] text-gray-400 text-right block mt-1">{msg.time}</span>
                      </div>
                    ))}
                  </div>
                  <form onSubmit={handleSendMsg} className="flex flex-col sm:flex-row gap-2 pt-2 border-t border-gray-150 dark:border-slate-800">
                    <input type="text" placeholder="Inquire securely on this draft folder..." value={newMsg} onChange={(e) => setNewMsg(e.target.value)}
                      className="min-w-0 flex-1 bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 py-2.5 px-4 text-xs font-sans text-gray-800 dark:text-slate-100 rounded-none focus:outline-none" />
                    <button type="submit" className="bg-[#C59B27] text-white font-sans text-xs uppercase tracking-wider font-bold py-2.5 px-4">Send</button>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
