const lessons = [1, 2, 3, 4, 5, 6, 7, 8];

export default function LessonPlan() {
  const amplitude = 60;  // px swing from center
  const frequency = 0.8; // smaller = slower curve

  return (
    <div >

        <div style={{ position: "relative", height: lessons.length * 120 }}>
        {lessons.map((number, i) => {
            const x = Math.sin(i * frequency) * amplitude;
            const y = i * 120; // vertical spacing
            return (
                <button
                key={number}
                className="stake"
                style={{
                    position: "absolute",
                    left: `calc(50% + ${x}px)`,
                    top: y,
                    ["--btn" as any]: "#22c55e"
                    }} 
                    >
                {number}
            </button>
            );
        })}
        </div>
    </div>
  );
}
