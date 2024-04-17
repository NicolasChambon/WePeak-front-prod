const rewriteImagePath = (path) => {
  // if path does not start with https, we add the path to the image folder
  if (!path.startsWith('https')) {
    return `https://melvinleroux-server.eddi.cloud/${path}`;
  }
  return path;
};

export default rewriteImagePath;
