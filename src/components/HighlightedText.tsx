/** A small, safe renderer for the **emphasis** markers in the local dictionary. */
export function HighlightedText({ text }: { text: string }) {
  return (
    <span className="journal-copy">
      {text.split(/(\*\*[^*]+\*\*)/g).map((part, index) =>
        part.startsWith("**") && part.endsWith("**") ? (
          <strong key={index} className="journal-emphasis">
            {part.slice(2, -2)}
          </strong>
        ) : (
          part
        ),
      )}
    </span>
  );
}
