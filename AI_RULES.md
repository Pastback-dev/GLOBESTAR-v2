# AI Development Rules & Tech Stack

## Tech Stack
- **Vite**: Fast build tool and development server.
- **React 18 & TypeScript**: Core UI library with strict type safety.
- **Tailwind CSS**: Utility-first styling framework for all UI components.
- **shadcn/ui**: Accessible, high-quality UI components built on Radix UI.
- **Lucide React**: Standard library for consistent iconography.
- **React Router DOM**: Client-side routing for navigation.
- **TanStack Query**: Efficient server state management and data fetching.
- **React Hook Form & Zod**: Robust form handling and schema-based validation.
- **Sonner**: Modern toast notifications for user feedback.

## Library Usage Rules

### Styling & Layout
- **Tailwind CSS**: Use Tailwind utility classes for all styling. Avoid writing raw CSS in `.css` files unless defining global variables or complex animations.
- **Design Tokens**: Utilize the CSS variables defined in `src/index.css` (e.g., `bg-navy`, `text-orange`) to maintain brand consistency.
- **Responsive Design**: Always use Tailwind's responsive prefixes (`sm:`, `md:`, `lg:`, etc.) to ensure mobile-first responsiveness.

### Components
- **shadcn/ui**: Always check `src/components/ui/` for existing components before building new ones. If a component is missing, use the shadcn/ui pattern.
- **Icons**: Use `lucide-react` for all icons. Maintain consistent sizing (usually `size={16}` or `size={20}`).
- **Class Merging**: Use the `cn()` utility from `@/lib/utils` for all conditional class merging.

### State & Data
- **Server State**: Use TanStack Query (`useQuery`, `useMutation`) for all API interactions. Do not use `useEffect` for data fetching.
- **Forms**: Use `react-hook-form` combined with `zod` for validation. Define schemas clearly to ensure type safety from input to submission.

### Architecture
- **File Structure**: 
  - `src/components/`: Reusable UI components.
  - `src/pages/`: Page-level components mapped to routes.
  - `src/hooks/`: Custom React hooks.
  - `src/lib/`: Utility functions and shared configurations.
- **Component Size**: Keep components focused and under 100 lines where possible. Refactor large components into smaller sub-components.