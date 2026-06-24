import Card from "./Card";

function ScoreCard({
  title,
  score,
}) {
  return (
    <Card>

      <div className="flex justify-between items-center mb-4">

        <h3 className="text-white font-medium">
          {title}
        </h3>

        <span className="text-amber-400 font-bold">
          {score}%
        </span>

      </div>

      <div className="w-full bg-slate-700 h-3 rounded-full">

        <div
          className="bg-amber-500 h-3 rounded-full"
          style={{
            width: `${score}%`,
          }}
        />

      </div>

    </Card>
  );
}

export default ScoreCard;