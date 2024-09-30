import AccessibleAccordion from "@/components/accordion/AccessibleAccordion";
import NonAccessibleAccordion from "@/components/accordion/NonAccessibleAccordion";

const AccordionPage = () => {
  return (
    <div className="container  px-8 space-y-6">
      <header>
        <h1 className="text-4xl font-bold border-b border-slate-200 mb-2 pb-2">
          Accordion
        </h1>

        <p className="text-lg text-gray-700">
          An accordion is a user interface component that allows content to be
          expanded or collapsed, enabling the user to hide or show information
          as needed. It is often used to condense long sections of information
          and improve the user experience by reducing visual clutter.
        </p>
      </header>

      <section className="">
        <h2 className="text-2xl font-semibold mb-2">
          When should an accordion be used?
        </h2>
        <p className="text-lg text-gray-700">
          An accordion should be used when you have multiple sections of related
          content that can be grouped together. This helps in presenting
          information in a more organized and compact way, such as FAQs,
          policies, or lengthy forms. It is especially helpful for reducing the
          amount of content visible at one time, improving navigation and focus
          for users.
        </p>
      </section>

      <section className="">
        <h2 className="text-2xl font-semibold mb-2">
          Behavior of a non-accessible accordion
        </h2>
        <p className="text-lg text-gray-700">
          A non-accessible accordion lacks proper ARIA attributes and keyboard
          navigation support. Users with disabilities might find it difficult or
          impossible to interact with such components. For example, users who
          rely on screen readers may not receive the appropriate feedback about
          which section is open or closed, and users navigating with a keyboard
          may not be able to expand or collapse sections effectively.
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-2">
          Example of a non-accessible accordion
        </h2>
        <NonAccessibleAccordion />
      </section>

      <section className="">
        <h2 className="text-2xl font-semibold mb-2">
          Behavior of an accessible accordion
        </h2>
        <p className="text-lg text-gray-700">
          An accessible accordion includes ARIA attributes, proper tabbing, and
          keyboard navigation support. It allows users to interact with the
          accordion using the <code>Tab</code>, <code>Enter</code>, and{" "}
          <code>Arrow</code> keys. Screen readers can announce which sections
          are expanded or collapsed, providing a better experience for users
          with visual or motor impairments.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">
          Steps to Make an Accordion Accessible
        </h2>
        <ol className="list-decimal list-inside text-lg text-gray-800 pl-4">
          <li className="mb-2">
            Use <code>button</code> elements for the accordion headers. This
            ensures they are focusable and can be activated using the{" "}
            <code>Enter</code> or <code>Space</code> keys.
          </li>
          <li className="mb-2">
            Add the <code>aria-expanded</code> attribute to each{" "}
            <code>button</code> to indicate whether the section is currently
            expanded (<code>true</code>) or collapsed (<code>false</code>).
          </li>
          <li className="mb-2">
            Use the <code>aria-controls</code> attribute on the{" "}
            <code>button</code> to reference the <code>id</code> of the
            corresponding panel. This helps screen readers understand the
            relationship between the button and the content.
          </li>
          <li className="mb-2">
            Assign a unique <code>id</code> to each accordion panel, and add the{" "}
            <code>role=&quot;region&quot;</code> attribute to mark it as a
            landmark for screen readers.
          </li>
          <li className="mb-2">
            Add the <code>aria-labelledby</code> attribute to each panel,
            referencing the <code>id</code> of the corresponding button. This
            ensures that screen readers announce the appropriate heading when
            the panel is focused.
          </li>
          <li className="mb-2">
            Ensure proper keyboard navigation. Users should be able to navigate
            through accordion headers using the <code>Tab</code> key, and expand
            or collapse them using <code>Enter</code> or <code>Space</code>.
          </li>
          <li className="mb-2">
            Optionally, implement arrow key navigation for improved usability.
            Allow users to use the <code>Up</code> and <code>Down</code> arrow
            keys to move focus between accordion headers.
          </li>
          <li className="mb-2">
            Provide visible focus indicators for accordion headers to make it
            clear which element is currently focused, improving usability for
            keyboard users.
          </li>
        </ol>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">
          Example of an accessible accordion
        </h2>
        <AccessibleAccordion />
      </section>
    </div>
  );
};

export default AccordionPage;
