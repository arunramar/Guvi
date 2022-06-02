class Circle{

    radius = 0;
    color = "";
    constructor(){
        radius = 5;
        color = "blue";
    }

    constructor(radius){
        this.radius = Number(radius);
        color = "blue";
        }

    constructor(radius, color){
        this.radius = radius;
        this.color = color;
        }



        getRadius() {
        return radius;
        }

        setRadius(radius){
            this.radius=Number(radius);
        }

        getColor() {
            return color;
            }
    
        setColor(color){
            this.color=color;
        }
    
        toString() {
            return `Circle(${radius},${color})` ;
        
        }

        getArea() {
            return (22/7)*radius*radius ;
        }

        getCircumeference() {
            return 2*(22/7)*radius ;
        }

    }