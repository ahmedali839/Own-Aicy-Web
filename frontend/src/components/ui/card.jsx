// import * as React from "react";
// import { cn } from "../../lib/utils";

// const Card = React.forwardRef(({ className, ...props }, ref) => (
//     <div
//         ref={ref}
//         className={cn(
//             //   "shadcn-card rounded-xl border bg-card border-card-border text-card-foreground shadow-sm",
//             "rounded-xl border bg-white text-gray-900 shadow-sm dark:bg-white dark:text-gray-700",
//             className
//         )}
//         {...props}
//     />
// ));
// Card.displayName = "Card";

// const CardHeader = React.forwardRef(({ className, ...props }, ref) => (
//     <div
//         ref={ref}
//         className={cn("flex flex-col space-y-1.5 p-6", className)}
//         {...props}
//     />
// ));
// CardHeader.displayName = "CardHeader";

// const CardTitle = React.forwardRef(({ className, ...props }, ref) => (
//     <div
//         ref={ref}
//         className={cn(
//             "text-2xl font-semibold leading-none tracking-tight",
//             className
//         )}
//         {...props}
//     />
// ));
// CardTitle.displayName = "CardTitle";

// const CardDescription = React.forwardRef(({ className, ...props }, ref) => (
//     <div
//         ref={ref}
//         className={cn("text-sm text-muted-foreground", className)}
//         {...props}
//     />
// ));
// CardDescription.displayName = "CardDescription";

// const CardContent = React.forwardRef(({ className, ...props }, ref) => (
//     <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
// ));
// CardContent.displayName = "CardContent";

// const CardFooter = React.forwardRef(({ className, ...props }, ref) => (
//     <div
//         ref={ref}
//         className={cn("flex items-center p-6 pt-0", className)}
//         {...props}
//     />
// ));
// CardFooter.displayName = "CardFooter";

// export {
//     Card,
//     CardHeader,
//     CardFooter,
//     CardTitle,
//     CardDescription,
//     CardContent,
// };
























// import * as React from "react";
// import { cn } from "../../lib/utils";

// const Card = React.forwardRef(({ className, ...props }, ref) => (
//     <div
//         ref={ref}
//         className={cn(
//             "rounded-xl border bg-white text-gray-900 shadow-sm",
//             "dark:bg-gray-900 dark:border-gray-700 dark:text-gray-100",
//             className
//         )}
//         {...props}
//     />
// ));
// Card.displayName = "Card";

// const CardHeader = React.forwardRef(({ className, ...props }, ref) => (
//     <div
//         ref={ref}
//         className={cn("flex flex-col space-y-1.5 p-6", className)}
//         {...props}
//     />
// ));
// CardHeader.displayName = "CardHeader";

// const CardTitle = React.forwardRef(({ className, ...props }, ref) => (
//     <h2
//         ref={ref}
//         className={cn(
//             "text-2xl font-semibold leading-none tracking-tight",
//             className
//         )}
//         {...props}
//     />
// ));
// CardTitle.displayName = "CardTitle";

// const CardDescription = React.forwardRef(({ className, ...props }, ref) => (
//     <p
//         ref={ref}
//         className={cn(
//             "text-sm text-gray-600 dark:text-gray-400",
//             className
//         )}
//         {...props}
//     />
// ));
// CardDescription.displayName = "CardDescription";

// const CardContent = React.forwardRef(({ className, ...props }, ref) => (
//     <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
// ));
// CardContent.displayName = "CardContent";

// const CardFooter = React.forwardRef(({ className, ...props }, ref) => (
//     <div
//         ref={ref}
//         className={cn("flex items-center p-6 pt-0", className)}
//         {...props}
//     />
// ));
// CardFooter.displayName = "CardFooter";

// export {
//     Card,
//     CardHeader,
//     CardFooter,
//     CardTitle,
//     CardDescription,
//     CardContent,
// };
























import * as React from "react";
import { cn } from "../../lib/utils";

const Card = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      // Light mode
      "rounded-xl border border-gray-200 bg-white text-gray-900 shadow-sm",
      // Dark mode
    //   "dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100",
      className
    )}
    {...props}
  />
));
Card.displayName = "Card";

const CardHeader = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col gap-1.5 p-6", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef(({ className, ...props }, ref) => (
  <h2
    ref={ref}
    className={cn(
      "text-xl font-semibold leading-tight",
      className
    )}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn(
      "text-sm text-gray-600 dark:text-gray-400",
      className
    )}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};
