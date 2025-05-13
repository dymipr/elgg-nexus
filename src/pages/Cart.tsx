
import React, { useState } from "react";
import { useCart } from "@/contexts/CartContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Trash2, CreditCard } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const Cart = () => {
  const { items, removeFromCart, clearCart, totalPrice } = useCart();
  const { toast } = useToast();
  const [isPaymentProcessing, setIsPaymentProcessing] = useState(false);

  const handleRemoveItem = (id: string) => {
    removeFromCart(id);
    toast({
      title: "Item removed",
      description: "The item has been removed from your cart",
    });
  };

  const createOrder = (data: any, actions: any) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: totalPrice.toFixed(2),
            currency_code: "USD",
          },
          description: "Purchase from Elgg Commerce",
        },
      ],
    });
  };

  const onApprove = (data: any, actions: any) => {
    return actions.order.capture().then(function(details: any) {
      setIsPaymentProcessing(false);
      toast({
        title: "Payment successful!",
        description: `Transaction completed by ${details.payer.name.given_name}`,
      });
      clearCart();
    });
  };

  const onError = (err: any) => {
    setIsPaymentProcessing(false);
    toast({
      title: "Payment failed",
      description: "Something went wrong with your payment. Please try again.",
      variant: "destructive",
    });
    console.error("PayPal error:", err);
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
          <Alert>
            <AlertTitle>Your cart is empty</AlertTitle>
            <AlertDescription>
              You haven't added any items to your cart yet. Browse our marketplace to find something you love!
            </AlertDescription>
          </Alert>
          <div className="mt-6">
            <Link to="/">
              <Button>Continue Shopping</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Product</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {items.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>
                      <div className="flex items-center gap-4">
                        <img 
                          src={item.image} 
                          alt={item.title} 
                          className="w-16 h-16 object-cover rounded-md"
                        />
                        <div>
                          <div className="font-medium">{item.title}</div>
                          <div className="text-sm text-muted-foreground">Seller: {item.seller}</div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>${item.price.toFixed(2)}</TableCell>
                    <TableCell className="text-right">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        onClick={() => handleRemoveItem(item.id)}
                        className="text-destructive hover:text-destructive-foreground hover:bg-destructive"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>${totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax</span>
                    <span>$0.00</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg pt-2 border-t">
                    <span>Total</span>
                    <span>${totalPrice.toFixed(2)}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col gap-4">
                <PayPalScriptProvider options={{ "client-id": "test" }}>
                  <PayPalButtons 
                    style={{ layout: "horizontal" }}
                    createOrder={createOrder}
                    onApprove={onApprove}
                    onError={onError}
                    disabled={isPaymentProcessing}
                  />
                </PayPalScriptProvider>

                <div className="w-full text-center text-sm text-muted-foreground">or</div>
                
                <Button className="w-full" disabled={isPaymentProcessing}>
                  <CreditCard className="mr-2 h-4 w-4" /> Pay with Credit Card
                </Button>

                <div className="pt-4 text-center text-xs text-muted-foreground">
                  By completing this purchase you agree to our <Link to="/terms" className="underline">Terms of Service</Link>
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
