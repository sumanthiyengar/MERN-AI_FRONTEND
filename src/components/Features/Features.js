import {
    ArrowPathIcon,
    CloudArrowUpIcon,
    LockClosedIcon,
  } from "@heroicons/react/20/solid";
  
  const features = [
    {
      name: "Push to deploy",
      description:
        "Our solution offers seamless integration, automated workflows, and robust support to ensure your app is up and running in no time.",
      href: "#",
      icon: CloudArrowUpIcon,
    },
    {
      name: "SSL certificates",
      description:
        "It ensure secure, encrypted communication between your server and clients. They protect sensitive data, build trust, and are essential for maintaining privacy and data integrity in online transactions.",
      href: "#",
      icon: LockClosedIcon,
    },
    {
      name: "Simple queues",
      description:
        "Simple queues manage tasks by placing them in a line, ensuring that they are processed in the order they were received. This straightforward method helps in organizing and handling tasks efficiently",
      href: "#",
      icon: ArrowPathIcon,
    },
  ];
  
  export default function AppFeatures() {
    return (
      <div className="bg-gray-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-400">
              Deploy faster
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Everything you need to deploy your app
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-300">
            Streamlined tools and services for rapid deployment. From setup to launch, ensure your application is live with minimal effort
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.name} className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                    <feature.icon
                      className="h-5 w-5 flex-none text-indigo-400"
                      aria-hidden="true"
                    />
                    {feature.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
                    <p className="flex-auto">{feature.description}</p>
                    <p className="mt-6">
                      <a
                        href={feature.href}
                        className="text-sm font-semibold leading-6 text-indigo-400"
                      >
                        Learn more <span aria-hidden="true">→</span>
                      </a>
                    </p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    );
  }
  