const gcd = (a, b) => {
  if (b == 0)
    return a;
  else
    return gcd(b, (a % b));
};

const random = ({ Threshold: threshold }) => {
	return Math.floor(Math.random() * threshold);
};

const math = {
	GCD: gcd,
	Random: random
};

export { 
	gcd as GCD,
	random as Random
};


export default math;