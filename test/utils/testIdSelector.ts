function testIdSelector(id: string): string {
  return `[data-testid="${id}"]`;
}

export { testIdSelector as testId };
