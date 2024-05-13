import Card from "./Card";

export default function Container() {
  return (
    <div className="sm:p-4 sm:ml-64">
      <div className="p-4 rounded-lg dark:border-gray-700">
        <div className="grid grid-cols-2 gap-4 mb-4">
          <Card>
            <div className="w-full h-full p-2">
              <h1 className="text-4xl font-bold dark:text-gray-50">Activity</h1>
            </div>
          </Card>
          <Card>
            <input
              className="border dark:border-zinc-900 focus:outline-primary bg-gray-50 dark:bg-zinc-800 px-4 py-3 w-full rounded-3xl"
              type="text"
              name="search"
              placeholder="Search.."
              autoComplete="off"
            />
          </Card>
        </div>
        <div className="grid grid-cols-3 gap-4 mb-4">
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </div>
        <Card></Card>
      </div>
    </div>
  );
}
