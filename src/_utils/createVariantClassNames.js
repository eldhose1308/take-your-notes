const createVariantClassNames = (baseClass, { variants, defaultVariants }) => {
    return (options) => {
      const { className, ...rest } = options;
      const variantClasses = Object.keys(defaultVariants).map(variantType => {
        const selectedVariant = rest[variantType] || defaultVariants[variantType];
        const variantClass = variants[variantType][selectedVariant] || '';
        return variantClass;
      });
  
      return [
        baseClass,
        ...variantClasses,
        className
      ].filter(Boolean).join(' ');
    };
  }
  
const cn = (classNames='') => {
    const classArr = classNames.split(' ')
    return ""
}  

export default createVariantClassNames;
export { cn }