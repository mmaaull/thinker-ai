import IconSymbol from './ui/IconSymbol';

function ConversationView({ messages = [] }) {
  return (
    <div className="space-y-3">
      {messages.map((m) => (
        <div key={m.id} className="glass-card p-3 rounded-xl">
          <div className="mb-2 flex items-start gap-3">
            <div className="rounded-full bg-surface-container p-2">
              <IconSymbol size={18}>{m.role === 'user' ? 'person' : 'smart_toy'}</IconSymbol>
            </div>
            <div>
              <div className="text-sm font-semibold text-on-surface">{m.role === 'user' ? 'User' : m.agent || 'System'}</div>
              <div className="text-body-sm text-on-surface-variant">{m.time}</div>
            </div>
          </div>

          <div className="text-body-md">{m.content}</div>
        </div>
      ))}
    </div>
  );
}

export default ConversationView;
