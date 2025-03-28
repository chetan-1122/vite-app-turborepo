import {
  Button,
  Input,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@ui/components";
const Dashboard = () => {
  return (
    <>
      <div className="flex items-center  bg-gray-100 justify-center h-screen">
        <div className="max-w-sm mx-auto w-full bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6">
          <div className="text-center">
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
              Sign in
            </h2>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Need an account?{" "}
              <a
                href="/"
                className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-300"
              >
                Sign Up
              </a>
            </p>
          </div>
          <div className="my-6 mt-6 border-t border-gray-300 relative">
            <span className="absolute top-[-10px] bg-white left-1/2 transform -translate-x-1/2 px-3 text-gray-500">
              OR
            </span>
          </div>
          <form className="space-y-6 mt-8">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Email
              </label>
              <div className="mt-1">
                <Input
                  className="appearance-none block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none sm:text-sm border-gray-300 placeholder-gray-400 dark:bg-gray-800 dark:border-gray-600 dark:text-white focus:ring-indigo-500 focus:border-indigo-500"
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Password
                  </label>
                </div>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-300"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-1">
                <Input
                  className="appearance-none block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none sm:text-sm border-gray-300 placeholder-gray-400 dark:bg-gray-800 dark:border-gray-600 dark:text-white focus:ring-indigo-500 focus:border-indigo-500"
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

              <div className="flex items-center">
                <Input
                  id="remember_me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label className="ml-2 block text-sm text-gray-900 dark:text-gray-300">
                  Remember me
                </label>
              </div>
            

            <div>
              <Button className="inline-flex items-center border font-medium rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 px-4 py-2 text-base bg-indigo-600 font-medium text-white hover:bg-indigo-800 w-full justify-center">
                Sign in
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
