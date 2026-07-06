function TypographyH2({ ...props }: React.ComponentProps<"h2">) {
  return (
    <h2
      className="text-center text-xl leading-[1.3] md:leading-[1.28571] font-bold md:font-semibold md:text-[1.75rem]"
      {...props}
    />
  )
}

export { TypographyH2 }
