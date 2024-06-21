function Skill() {
  return (
    <section className="text-gray-600 ">
      <div className="text-5xl font-medium text-center"><h1> Skill</h1></div>
      <div className="flex justify-around py-16">
        <div>
          <p className="mb-2 font-bold text-xl">FRONTEND</p>
          <img src="https://skillicons.dev/icons?perline=5&i=react,jquery,js,sass,css,bootstrap,tailwind,html" alt="" />
        </div>
        <div>
          <p className="mb-2 font-bold text-xl">OTHERS</p>
          <img src="https://skillicons.dev/icons?perline=5&i=vscode,git,github,netlify,atom" alt="" />
        </div>
      </div>
    </section>
  );
}
export default Skill;
