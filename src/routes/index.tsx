import { component$ } from "@builder.io/qwik";
import { server$ } from "@builder.io/qwik-city";

const search = server$(async () => {
  // Simulate a long running request
  await new Promise((resolve) => setTimeout(resolve, 5000));

  return "Some data";
});

export default component$(() => {
  return (
    <>
      <button
        onClick$={async () => {
          await search();
        }}
      >
        Click me then refresh
      </button>
    </>
  );
});
