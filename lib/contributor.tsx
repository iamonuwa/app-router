import Image from "next/image";

export const getContributor = (name: string) => {
  switch (name) {
    case "jane":
      console.log("Jane");
      return (
        <Image src="/contributors/jane.png" alt="jane" width={20} height={20} />
      );
    case "doe":
      return (
        <Image src="/contributors/doe.png" alt="doe" width={20} height={20} />
      );
    case "john":
      return (
        <Image src="/contributors/john.png" alt="john" width={20} height={20} />
      );
    case "alice":
      return (
        <Image
          src="/contributors/alice.png"
          alt="alice"
          width={20}
          height={20}
        />
      );
    case "bob":
      return (
        <Image src="/contributors/bob.png" alt="bob" width={20} height={20} />
      );
    case "charlie":
      return (
        <Image
          src="/contributors/charlie.png"
          alt="charlie"
          width={20}
          height={20}
        />
      );
    case "dave":
      return (
        <Image src="/contributors/dave.png" alt="dave" width={20} height={20} />
      );
    case "eve":
      return (
        <Image src="/contributors/eve.png" alt="eve" width={20} height={20} />
      );
    case "frank":
      return (
        <Image
          src="/contributors/frank.png"
          alt="frank"
          width={20}
          height={20}
        />
      );
    default:
      console.log("Contributor not found");
      return null;
  }
};
