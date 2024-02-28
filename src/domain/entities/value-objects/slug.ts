export class Slug {
  public value: string

  constructor(value: string) {
    this.value = value
  }

  /**
   * Recieves a string and normalize it as a slug.
   * 
   * Example: "An example title" => "an-example-title"
   * 
   * @param text {string}
   * 
   */
  static createFromText(text: string) {
    const slugText = text
      .normalize("NFKD")
      .toLowerCase()
      .trim()
      .replace(/\s+/g, '')
  }
}