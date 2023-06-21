const removeImageExtension = (imageName: string) => {
  const imageNameLength = imageName.length;

  return imageName.substring(0, imageNameLength - 4);
};

export { removeImageExtension };
